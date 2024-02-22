import { createFileRoute } from '@tanstack/react-router'

import ZustandCodePreview from '../components/zustand/zustandCodePreview'
import zustandlogo from '../assets/zustand-logo.png'

function ZustandComponent() {
  return (
    <div className="informations-container">
      <h1>Zustand information</h1>
      <section className="informations-section">
        <article>
          <p>
            Zustand is a small, fast and scaleable bearbones state-management
            solution for JavaScript applications. It&apos;s based on the concept
            of a global store with a mutable state that you can subscribe to.
            Zustand is not tied to a specific framework, so you can use it with
            React, Vue, Angular, or even vanilla JavaScript.
          </p>
          <p>
            Here are some reasons why Zustand is good for small to medium-sized
            applications:
            <ul>
              <li>
                Simplicity: Zustand has a simple API that&apos;s easy to learn
                and use. This makes it a good choice for small to medium-sized
                applications where you don&apos;t need the complexity of larger
                state management libraries.
              </li>
              <li>
                Performance: Zustand is lightweight and has a minimal impact on
                performance. It uses a subscription model to update components
                only when necessary, reducing unnecessary renders.
              </li>
              <li>
                Flexibility: Zustand is not tied to a specific framework, so you
                can use it in any JavaScript application. This makes it a
                versatile choice for a variety of projects.
              </li>
              <li>
                Scalability: While Zustand is simple, it&apos;s also capable of
                handling more complex state management scenarios. You can
                combine multiple stores, create middleware, and more.
              </li>
              <li>
                Immutability: Zustand encourages the use of immutable state
                updates, which can help prevent bugs and make your code easier
                to reason about.
              </li>
            </ul>
          </p>
        </article>
        <img src={zustandlogo} alt="zustand-logo" width={300} height={300} />
      </section>
      <section className="informations-section">
        <ZustandCodePreview />
        <p>
          Here is an example of how you can use Zustand to manage state in a
          React application:
        </p>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/zustand')({
  component: ZustandComponent,
})
