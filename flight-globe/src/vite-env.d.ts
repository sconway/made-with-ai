/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Flight data source when VITE_USE_BACKEND=0: 'opensky' or airplanes.live. */
  readonly VITE_FLIGHT_SOURCE?: string
  /** Default on. Set to "0" to bypass the shared backend (local debug only). */
  readonly VITE_USE_BACKEND?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
