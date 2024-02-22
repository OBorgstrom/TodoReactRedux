import { createFileRoute } from '@tanstack/react-router'

function ReduxComponent() {
  return (
    <div className="p-2">
      <h3>Redux Information</h3>
    </div>
  )
}

export const Route = createFileRoute('/redux')({
  component: ReduxComponent,
})
