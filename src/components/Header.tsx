import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const Header = () => {
  const [classes, setClasses] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setClasses('blur-bg')
      } else {
        setClasses('')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [classes])

  return (
    <header className={classes}>
      <h1>Redux/Zustand</h1>
      <nav className="nav-indicator">
        <Link
          to="/"
          activeProps={{
            className: 'is-active',
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          activeProps={{
            className: 'is-active',
          }}
        >
          About
        </Link>
        <Link
          to="/redux"
          activeProps={{
            className: 'is-active',
          }}
        >
          Redux
        </Link>
        <Link
          to="/zustand"
          activeProps={{
            className: 'is-active',
          }}
        >
          Zustand
        </Link>
      </nav>
    </header>
  )
}

export default Header
