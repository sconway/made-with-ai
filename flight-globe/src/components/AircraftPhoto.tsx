import { useEffect, useState } from 'react'

interface PhotoInfo {
  src: string
  link: string
  photographer: string
}

/**
 * Planespotters thumbnail for an ICAO24 hex. Hidden until a photo exists.
 */
export function AircraftPhoto({ icao24 }: { icao24: string }) {
  const [photo, setPhoto] = useState<PhotoInfo | null>(null)

  useEffect(() => {
    const hex = icao24.trim().toLowerCase()
    if (!/^[0-9a-f]{6}$/.test(hex)) {
      setPhoto(null)
      return
    }
    let cancelled = false
    setPhoto(null)
    fetch(`/api/photos/${hex}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { src?: string; link?: string; photographer?: string } | null) => {
        if (cancelled) return
        if (data?.src) {
          setPhoto({
            src: data.src,
            link: data.link || '',
            photographer: data.photographer || '',
          })
        } else {
          setPhoto(null)
        }
      })
      .catch(() => {
        if (!cancelled) setPhoto(null)
      })
    return () => {
      cancelled = true
    }
  }, [icao24])

  if (!photo?.src) return null

  return (
    <div className="aircraft-photo">
      <a
        href={photo.link || undefined}
        target="_blank"
        rel="noreferrer"
        title={
          photo.photographer
            ? `Photo © ${photo.photographer}`
            : 'Aircraft photo'
        }
      >
        <img src={photo.src} alt="" />
      </a>
    </div>
  )
}
