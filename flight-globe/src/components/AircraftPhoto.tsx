import { useEffect, useState } from 'react'

interface PhotoInfo {
  src: string
  link: string
  photographer: string
}

/**
 * Planespotters thumbnail for an ICAO24 hex. Same-height slot so the
 * detail panel does not jump when the image arrives.
 */
export function AircraftPhoto({ icao24 }: { icao24: string }) {
  const [photo, setPhoto] = useState<PhotoInfo | null | undefined>(undefined)

  useEffect(() => {
    const hex = icao24.trim().toLowerCase()
    if (!/^[0-9a-f]{6}$/.test(hex)) {
      setPhoto(null)
      return
    }
    let cancelled = false
    setPhoto(undefined)
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

  return (
    <div className="aircraft-photo">
      {photo?.src ? (
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
      ) : (
        <div className="aircraft-photo-empty">
          {photo === undefined ? 'Loading photo…' : 'No photo'}
        </div>
      )}
    </div>
  )
}
