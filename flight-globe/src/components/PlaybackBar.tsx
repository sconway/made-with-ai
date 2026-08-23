import { useEffect, useMemo, useRef } from 'react'
import { useStore } from '../store/useStore'
import { useBackend } from '../lib/api'

function fmtClock(ms: number): string {
  const d = new Date(ms)
  return d.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

/**
 * Bottom scrubber for replaying recent shared-backend snapshots.
 * Needs at least two history frames (builds up as the poller runs).
 */
export function PlaybackBar() {
  const backend = useBackend()
  const playbackLive = useStore((s) => s.playbackLive)
  const playbackAt = useStore((s) => s.playbackAt)
  const playbackEarliest = useStore((s) => s.playbackEarliest)
  const playbackLatest = useStore((s) => s.playbackLatest)
  const playbackPlaying = useStore((s) => s.playbackPlaying)
  const setPlaybackLive = useStore((s) => s.setPlaybackLive)
  const setPlaybackAt = useStore((s) => s.setPlaybackAt)
  const setPlaybackPlaying = useStore((s) => s.setPlaybackPlaying)

  const earliest = playbackEarliest
  const latest = playbackLatest
  const ready = backend && earliest != null && latest != null && latest > earliest

  const value = useMemo(() => {
    if (playbackLive || playbackAt == null) return latest ?? 0
    return playbackAt
  }, [playbackLive, playbackAt, latest])

  // Autoplay: advance scrubber toward latest.
  const playRef = useRef(playbackPlaying)
  playRef.current = playbackPlaying

  useEffect(() => {
    if (!playbackPlaying || !ready || earliest == null || latest == null) return
    const span = latest - earliest
    const step = Math.max(1_000, Math.floor(span / 120))
    const id = window.setInterval(() => {
      if (!playRef.current) return
      const cur = useStore.getState().playbackAt ?? earliest
      const next = cur + step
      if (next >= latest) {
        setPlaybackAt(latest)
        setPlaybackPlaying(false)
        setPlaybackLive(true)
      } else {
        setPlaybackAt(next)
      }
    }, 250)
    return () => clearInterval(id)
  }, [
    playbackPlaying,
    ready,
    earliest,
    latest,
    setPlaybackAt,
    setPlaybackPlaying,
    setPlaybackLive,
  ])

  if (!backend) return null

  return (
    <div className={`panel playback-bar${!ready ? ' dim' : ''}`}>
      <button
        type="button"
        className={`playback-live${playbackLive ? ' active' : ''}`}
        onClick={() => {
          setPlaybackPlaying(false)
          setPlaybackLive(true)
        }}
        title="Jump to live traffic"
      >
        Live
      </button>

      <button
        type="button"
        className="playback-toggle"
        disabled={!ready}
        onClick={() => {
          if (playbackPlaying) {
            setPlaybackPlaying(false)
          } else {
            if (playbackLive && latest != null) setPlaybackAt(earliest ?? latest)
            setPlaybackPlaying(true)
          }
        }}
        title={playbackPlaying ? 'Pause' : 'Play history'}
      >
        {playbackPlaying ? 'Pause' : 'Play'}
      </button>

      <input
        type="range"
        className="playback-scrub"
        disabled={!ready}
        min={earliest ?? 0}
        max={latest ?? 1}
        step={1000}
        value={value}
        onChange={(e) => {
          setPlaybackPlaying(false)
          setPlaybackAt(Number(e.target.value))
        }}
        aria-label="Playback time"
      />

      <div className="playback-time">
        {!ready
          ? 'Building history…'
          : playbackLive
            ? 'Live'
            : fmtClock(value)}
      </div>
    </div>
  )
}
