import { createFileRoute } from '@tanstack/react-router'

import reduxLogo from '../assets/redux-logo.png'
import zustandLogo from '../assets/zustand-logo.png'

function HomeComponent() {
  return (
    <div className="landing">
      <div className="logos">
        <img src={reduxLogo} alt="redux-logo" className="redux-logo" />
        <span className="separator" />
        <img src={zustandLogo} alt="zustand-logo" className="zustand-logo" />
      </div>
      <div className="landing-text">
        <h1>Redux vs Zustand</h1>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomeComponent,
})
