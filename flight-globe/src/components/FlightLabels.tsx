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
  const followFlight = useStore((s) => s.followFlight)
  const labelMode = useStore((s) => s.labelMode)
  const showPlanes = useStore((s) => s.display.planes)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const pickRef = useRef<(id: string) => void>(() => {})
  pickRef.current = (id: string) => {
    setSelectedFlight(id)
  }
  const layerRef = useRef<HTMLDivElement | null>(null)
  const buttonsRef = useRef<HTMLButtonElement[]>([])

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
    if (labelMode === 'off' || followFlight || !showPlanes) {
      if (layer.childElementCount) {
        layer.replaceChildren()
        buttonsRef.current = []
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

    syncButtons(layer, buttonsRef.current, layout, pickRef)
  })

  return null
}

function syncButtons(
  layer: HTMLDivElement,
  pool: HTMLButtonElement[],
  layout: LabelLayout[],
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
    let idx = i
    for (let j = i; j < pool.length; j++) {
      if (pool[j]!.dataset.id === l.id) {
        idx = j
        break
      }
    }
    if (idx !== i) {
      const existing = pool[idx]!
      pool.splice(idx, 1)
      pool.splice(i, 0, existing)
    }
    const btn = pool[i]!
    btn.hidden = false
    btn.style.left = `${Math.round(l.x)}px`
    btn.style.top = `${Math.round(l.y)}px`
    const cls = `flight-label${l.selected ? ' is-selected' : ''}${
      l.hovered ? ' is-hovered' : ''
    }${l.emergency ? ' is-emergency' : ''}`
    if (btn.className !== cls) btn.className = cls
    if (btn.dataset.id !== l.id || btn.dataset.text !== l.text) {
      btn.dataset.id = l.id
      btn.dataset.text = l.text
      btn.textContent = l.text
      btn.title = l.sub ? `${l.text} · ${l.sub}` : l.text
    }
  }
  for (let i = layout.length; i < pool.length; i++) {
    pool[i]!.hidden = true
  }
}
