import { createFileRoute } from '@tanstack/react-router'

function AboutComponent() {
  return (
    <div className="informations-container">
      <h1>About this project</h1>
      <section className="informations-section">
        <article>
          <p>
            This project is a simple comparison between Redux and Zustand, two
            popular state management libraries for JavaScript applications. The
            project is built using the TanStack React Router, which is a
            lightweight and flexible router for React applications.
          </p>
          <p>
            The project consists of three main pages: Redux vs Zustand, Redux,
            and Zustand. Each page contains information about the respective
            state management library, as well as code previews and comparisons.
          </p>
        </article>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})
