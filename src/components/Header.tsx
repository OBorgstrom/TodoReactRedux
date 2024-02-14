import { Link } from '@tanstack/react-router'

const Header = () => (
  <header>
    <h1>Redux/Zustand</h1>
    <nav>
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
      </Link>{' '}
      <Link
        to="/zustand"
        activeProps={{
          className: 'font-bold',
        }}
      >
        Zustand
      </Link>
    </nav>
  </header>
)

export default Header
