import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

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
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
