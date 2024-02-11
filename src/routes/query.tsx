import { createFileRoute } from '@tanstack/react-router'

function ReduxComponent() {
  return (
    <div className="container">
      heeejheeej
      <ul className="todoItem-item">
        <li>
          <strong>Title:</strong> <br />
          <strong>Description:</strong>
        </li>
        <div className="button-container">
          <button type="submit">Update</button>
          <button type="button">Delete</button>
        </div>
      </ul>
    </div>
  )
}

/*
 *
 * Skapar en Route som renderar componenten ovan ^
 * Som sedan Tanstack router automatiskt skapar ett trädschema
 * med alla routes som skapats så att man inte ska kunna skriva
 * in fel path när man skriver hur navigeringen ska fungera i __root.tsx
 *
 */

export const Route = createFileRoute('/query')({
  component: ReduxComponent,
})
