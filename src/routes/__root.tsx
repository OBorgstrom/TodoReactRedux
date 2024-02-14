import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
    <div className="container">
      <Header />
      <Outlet /> {/* Här renderas de olika routes som finns i applikationen */}
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
