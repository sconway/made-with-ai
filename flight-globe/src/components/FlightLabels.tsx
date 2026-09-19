import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useStore } from '../store/useStore'
import { readFlightAnchors } from '../lib/flightAnchors'
import { labelBudget, layoutFlightLabels, type LabelLayout } from '../lib/flightLabels'
import { overlayMargins, getMapBlend } from '../lib/mapView'

const _vec = new THREE.Vector3()

/**
 * Screen-space callsign labels. Positions come from Flights' instance
 * matrices; this layer only projects, caps density, and patches a DOM pool.
 */
export function FlightLabels() {
  const camera = useThree((s) => s.camera)
  const size = useThree((s) => s.size)
  const gl = useThree((s) => s.gl)
  const labelMode = useStore((s) => s.labelMode)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const pickRef = useRef<(id: string) => void>(() => {})
  pickRef.current = (id: string) => {
    setSelectedFlight(id)
  }
  const layerRef = useRef<HTMLDivElement | null>(null)
  const buttonsRef = useRef<HTMLButtonElement[]>([])
  const lastKeyRef = useRef('')

  useEffect(() => {
    const host = gl.domElement.parentElement ?? document.getElementById('root')
    if (!host) return
    const layer = document.createElement('div')
    layer.className = 'flight-label-layer'
    layer.setAttribute('aria-hidden', 'true')
    host.appendChild(layer)
    layerRef.current = layer
    return () => {
      layer.remove()
      layerRef.current = null
      buttonsRef.current = []
    }
  }, [gl])

  useFrame(() => {
    const layer = layerRef.current
    if (!layer) return
    if (labelMode === 'off') {
      if (layer.childElementCount) {
        layer.replaceChildren()
        buttonsRef.current = []
        lastKeyRef.current = ''
      }
      return
    }

    const { list, count } = readFlightAnchors()
    const camDist = camera.position.length()
    const mapMode = getMapBlend() > 0.2
    const mobile = size.width <= 720
    const max = labelBudget(labelMode, camDist, mapMode, mobile)
    const margins = overlayMargins(size.width, size.height)
    if (selectedFlightId && size.width > 720) {
      margins.right = Math.max(margins.right, 340)
    }

    const rect = gl.domElement.getBoundingClientRect()
    const layout = layoutFlightLabels(
      list,
      count,
      (x, y, z, out) => {
        _vec.set(x, y, z).project(camera)
        out.x = _vec.x
        out.y = _vec.y
        out.z = _vec.z
      },
      rect.width || size.width,
      rect.height || size.height,
      margins,
      max,
    )

    const key = layout
      .map((l) => `${l.id}:${l.x | 0}:${l.y | 0}:${l.selected ? 1 : 0}`)
      .join('|')
    const movedOnly =
      lastKeyRef.current.length > 0 &&
      lastKeyRef.current.replace(/:\d+:\d+/g, '') ===
        key.replace(/:\d+:\d+/g, '')
    lastKeyRef.current = key

    syncButtons(layer, buttonsRef.current, layout, movedOnly, pickRef)
  })

  return null
}

function syncButtons(
  layer: HTMLDivElement,
  pool: HTMLButtonElement[],
  layout: LabelLayout[],
  reuse: boolean,
  pickRef: { current: (id: string) => void },
) {
  while (pool.length < layout.length) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'flight-label'
    btn.addEventListener('click', (ev) => {
      ev.preventDefault()
      ev.stopPropagation()
      const id = btn.dataset.id
      if (id) pickRef.current(id)
    })
    layer.appendChild(btn)
    pool.push(btn)
  }
  for (let i = 0; i < layout.length; i++) {
    const l = layout[i]!
    const btn = pool[i]!
    btn.hidden = false
    btn.dataset.id = l.id
    btn.style.left = `${Math.round(l.x)}px`
    btn.style.top = `${Math.round(l.y)}px`
    const cls = `flight-label${l.selected ? ' is-selected' : ''}${
      l.hovered ? ' is-hovered' : ''
    }${l.emergency ? ' is-emergency' : ''}`
    if (btn.className !== cls) btn.className = cls
    if (!reuse || btn.dataset.text !== l.text) {
      btn.dataset.text = l.text
      btn.textContent = l.text
      btn.title = l.sub ? `${l.text} · ${l.sub}` : l.text
    }
  }
  for (let i = layout.length; i < pool.length; i++) {
    pool[i]!.hidden = true
  }
}
