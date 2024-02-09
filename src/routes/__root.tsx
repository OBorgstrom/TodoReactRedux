import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          minWidth: '400px',
        }}
      >
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>{' '}
        <Link
          to="/redux"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Redux
        </Link>
      </div>
      <hr />
      <Outlet /> {/* Här renderas de olika routes som finns i applikationen */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
