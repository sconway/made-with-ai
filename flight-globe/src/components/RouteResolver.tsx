import { useEffect } from 'react'
import { useStore } from '../store/useStore'
import { startRouteResolver } from '../lib/routes'

/**
 * Non-visual: starts the background adsbdb route resolver, bumping the store's
 * route version whenever new routes resolve so the arc layer rebuilds.
 */
export function RouteResolver() {
  const bumpRoutes = useStore((s) => s.bumpRoutes)
  useEffect(() => {
    startRouteResolver(bumpRoutes)
  }, [bumpRoutes])
  return null
}
