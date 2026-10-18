import { useEffect, useState } from 'react'
import { aircraftTypeName } from '../lib/aircraftTypes'

interface PhotoInfo {
  src: string
  link: string
  photographer: string
}

type PhotoResponse = { src?: string; link?: string; photographer?: string } | null

/** undefined while loading, null when the endpoint has no photo. */
function usePhoto(url: string | null): PhotoInfo | null | undefined {
  const [photo, setPhoto] = useState<PhotoInfo | null | undefined>(undefined)

  useEffect(() => {
    if (!url) {
      setPhoto(null)
      return
    }
    let cancelled = false
    setPhoto(undefined)
    fetch(url)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: PhotoResponse) => {
        if (cancelled) return
        setPhoto(
          data?.src
            ? {
                src: data.src,
                link: data.link || '',
                photographer: data.photographer || '',
              }
            : null,
        )
      })
      .catch(() => {
        if (!cancelled) setPhoto(null)
      })
    return () => {
      cancelled = true
    }
  }, [url])

  return photo
}

/**
 * Planespotters photo of this exact airframe, falling back to a Wikipedia
 * photo of its ICAO type. Hidden when neither exists.
 */
export function AircraftPhoto({
  icao24,
  typeCode,
}: {
  icao24: string
  typeCode?: string | null
}) {
  const hex = icao24.trim().toLowerCase()
  const type = (typeCode || '').trim().toUpperCase()
  const airframe = usePhoto(/^[0-9a-f]{6}$/.test(hex) ? `/api/photos/${hex}` : null)
  const typePhoto = usePhoto(
    airframe === null && /^[A-Z0-9]{2,4}$/.test(type)
      ? `/api/photos/type/${type}`
      : null,
  )

  const photo = airframe ?? (airframe === null ? typePhoto : null)
  if (!photo?.src) return null
  const isType = !airframe

  return (
    <div className="aircraft-photo">
      <a
        href={photo.link || undefined}
        target="_blank"
        rel="noreferrer"
        title={
          isType
            ? `Representative ${aircraftTypeName(type) ?? type} photo (Wikipedia)`
            : photo.photographer
              ? `Photo © ${photo.photographer}`
              : 'Aircraft photo'
        }
      >
        <img src={photo.src} alt={aircraftTypeName(type) ?? ''} />
        {isType && (
          <span className="aircraft-photo-caption">
            {aircraftTypeName(type) ?? type} · type photo
          </span>
        )}
      </a>
    </div>
  )
}
