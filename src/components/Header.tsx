import { Link } from '@tanstack/react-router'

const Header = () => (
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
    </Link>{' '}
    <Link
      to="/query"
      activeProps={{
        className: 'font-bold',
      }}
    >
      Query
    </Link>
  </div>
)

export default Header
