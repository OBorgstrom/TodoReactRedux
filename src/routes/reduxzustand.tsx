import { createFileRoute } from '@tanstack/react-router'

import ReduxCodePreview from '../components/redux/reduxCodePreview'
import ZustandCodePreview from '../components/zustand/zustandCodePreview'
import useTabTitle from '../hooks/useTabTitle'

function ReduxZustandComponent() {
  useTabTitle('Redux vs Zustand')
  return (
    <div className="informations-container">
      <h1>Zustand vs React</h1>
      <section className="informations-section">
        <article>
          <h3>Redux</h3>
          <p>
            Redux is a predictable state container for JavaScript apps. It helps
            you write applications that behave consistently, run in different
            environments (client, server, and native), and are easy to test.
          </p>
          <p>
            Redux&apos;s main concept is to store the state of the application
            in a single object, and to update that state using actions. Actions
            are plain JavaScript objects that describe changes to the state of
            the application. The state of the application is updated by pure
            functions called reducers, which take the current state and an
            action as arguments, and return a new state.
          </p>
        </article>
        <article>
          <h3>Zustand</h3>
          <p>
            Zustand is a small, fast and scaleable bearbones state-management
            solution for JavaScript applications. It&apos;s based on the concept
            of a global store with a mutable state that you can subscribe to.
            Zustand is not tied to a specific framework, so you can use it with
            React, Vue, Angular, or even vanilla JavaScript.
          </p>
          <p>
            Zustand&apos;s main concept is to create a store that holds the
            application&apos;s state, and to update that state using a set
            method. Components can subscribe to the store using the useStore
            hook, and will be re-rendered whenever the state changes.
          </p>
        </article>
      </section>
      <h1>Setup differences</h1>
      <section className="informations-section">
        <article>
          <h3>Redux</h3>
          <p>
            To use Redux in your application, you first need to create a store
            that holds your application&apos;s state. You can do this using the
            configureStore function from the Redux toolkit, which provides a
            convenient way to set up a store with middleware, reducers, and
            other options.
          </p>
          <p>
            You can then use the Provider component from the react-redux library
            to make the Redux store available to your application, and use the
            useSelector and useDispatch hooks to read from and write to the
            store in your components.
          </p>
        </article>
        <article>
          <h3>Zustand</h3>
          <p>
            To use Zustand in your application, you first need to create a store
            that holds your application&apos;s state. You can do this by calling
            the create method from the create library, which returns a store
            object with a set method for updating the state, and a useStore hook
            for subscribing to the state in your components.
          </p>
          <p>
            You can then use the Provider component from the react-zustand
            library to make the Zustand store available to your application, and
            use the useStore hook to read from and write to the store in your
            components.
          </p>
        </article>
      </section>
      <h1>Code Preview</h1>
      <section className="informations-section">
        <article>
          <h3>Code to setup redux</h3>
          <ReduxCodePreview code="storeText" />
          <ReduxCodePreview code="sliceText" />
          <ReduxCodePreview code="usageText" />
        </article>
        <article>
          <h3>Code to setup zustand</h3>
          <ZustandCodePreview />
        </article>
      </section>
      <h1>When to use Redux or Zustand</h1>
      <section className="informations-section">
        <article>
          <h3>When to use Redux</h3>
          <p>
            Redux is a good choice for large applications with complex state
            management needs. It&apos;s designed to be predictable and testable,
            and provides a number of features for managing state in a consistent
            way. If you need to manage a lot of state, or if you need to share
            state between different parts of your application, Redux might be a
            good choice for you.
          </p>
        </article>
        <article>
          <h3>When to use Zustand</h3>
          <p>
            Zustand is a good choice for small to medium-sized applications
            where you don&apos;t need the complexity of larger state management
            libraries. It has a simple API that&apos;s easy to learn and use,
            and is lightweight and performant. If you don&apos;t need the
            features of Redux, or if you want a simpler and more flexible
            solution, Zustand might be a good choice for you.
          </p>
        </article>
      </section>
      <h1>Some last words</h1>
      <section className="informations-section">
        <article>
          <h3>Redux</h3>
          <p>
            Redux is a powerful and flexible state management solution that can
            handle complex state management needs. It&apos;s a good choice for
            large applications, or for applications that need to share state
            between different parts of the application. Redux has a large and
            active community, and is well-supported by a number of third-party
            libraries and tools.
          </p>
        </article>
        <article>
          <h3>Zustand</h3>
          <p>
            Zustand is a simple, fast, and scaleable state management solution
            that&apos;s a good choice for small to medium-sized applications. It
            has a simple API that&apos;s easy to learn and use, and is
            lightweight and performant. Zustand is not tied to a specific
            framework, so you can use it in any JavaScript application, and it
            has a number of features for managing state in a consistent way.
          </p>
        </article>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/reduxzustand')({
  component: ReduxZustandComponent,
})
