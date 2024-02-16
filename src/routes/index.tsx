import { createFileRoute } from '@tanstack/react-router'

import reduxLogo from '../assets/redux-logo.png'
import zustandLogo from '../assets/zustand-logo.png'

function HomeComponent() {
  return (
    <div className="landing">
      <div className="logos">
        <img src={reduxLogo} alt="redux-logo" className="redux-logo" />
        <span className="separator" />
        <img src={zustandLogo} alt="redux-logo" className="zustand-logo" />
      </div>
      <h3>Welcome Home!</h3>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomeComponent,
})
