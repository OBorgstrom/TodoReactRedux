import { createFileRoute, Link } from '@tanstack/react-router'

import ZustandCodePreview from '../components/zustand/zustandCodePreview'
import zustandlogo from '../assets/zustand-logo.png'

function ZustandComponent() {
  return (
    <div className="informations-container">
      <h1>Zustand information</h1>
      <section className="informations-section">
        <article>
          <h3>A little about zustand</h3>
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
        <img src={zustandlogo} alt="zustand-logo" width={300} height={250} />
      </section>
      <section className="informations-section">
        <ZustandCodePreview />
        <article>
          <h3>How to use Zustand</h3>
          <p>
            To use Zustand in your application, you first need to create a
            store. A store is an object that holds your application&apos;s state
            and provides methods for updating that state. You can create a store
            using the <code>create</code> function from the <code>zustand</code>{' '}
            package.
          </p>
          <p>
            Here&apos;s an example of how you might create a store to manage a
            counter in a React application:
          </p>
          <Link
            to="/zustandDemo"
            activeProps={{
              className: 'is-active',
            }}
          >
            Zustand Demo
          </Link>
        </article>
      </section>
      <section className="informations-section">
        <article>
          <h3>When to use zustand</h3>
          <p>
            Zustand is a good choice for small to medium-sized applications
            where you want a simple, fast, and scaleable state management
            solution. It&apos;s a good choice for applications that don&apos;t
            need the complexity of larger state management libraries like Redux
            or MobX.
          </p>
          <p>
            Zustand is also a good choice for applications that need to be
            performant. It has a minimal impact on performance and uses a
            subscription model to update components only when necessary,
            reducing unnecessary renders.
          </p>
          <p>
            Finally, Zustand is a good choice for applications that need to be
            flexible. It&apos;s not tied to a specific framework, so you can use
            it in any JavaScript application. This makes it a versatile choice
            for a variety of projects.
          </p>
        </article>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/zustand')({
  component: ZustandComponent,
})
