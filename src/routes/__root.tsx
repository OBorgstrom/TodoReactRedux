import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import Header from '../components/Header'

/*
 *
 * Här är själva "index" för hela applikationen.
 * Tänker att man vill ha navigationen här
 * se det lite som vår header fil
 *
 */
function RootComponent() {
  return (
    <>
      <Header />
      <Outlet /> {/* Här renderas de olika routes som finns i applikationen */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
