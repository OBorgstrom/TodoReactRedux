import { createFileRoute } from '@tanstack/react-router'

function AboutComponent() {
  return (
    <div className="p-2">
      <h3>About</h3>
    </div>
  )
}

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})