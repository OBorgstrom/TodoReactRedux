import { createFileRoute } from '@tanstack/react-router'

function HomeComponent() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomeComponent,
})
