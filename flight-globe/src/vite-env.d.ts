/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Flight data source: 'opensky' (bbox coverage, needs auth) or default keyless airplanes.live. */
  readonly VITE_FLIGHT_SOURCE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
