import { createFileRoute } from '@tanstack/react-router'

import reduxlogo from '../assets/redux-logo.png'
import ReduxCodePreview from '../components/redux/reduxCodePreview'

function ReduxComponent() {
  return (
    <div className="informations-container">
      <h1>Redux Information</h1>
      <section className="informations-section">
        <article>
          <p>
            Redux is a predictable state container for JavaScript apps. It helps
            you write applications that behave consistently, run in different
            environments (client, server, and native), and are easy to test.
          </p>
          <p>
            Here are some reasons why Redux is good for large applications:
            <ul>
              <li>
                Predictability: Redux makes it easier to understand how your
                data changes over time with a single source of truth. It also
                makes it easier to debug your application and reproduce bugs.
              </li>
              <li>
                Centralized state: Redux keeps your application state in a
                single store, which can help you manage complex state more
                easily.
              </li>
              <li>
                Middleware: Redux has a middleware system that allows you to
                extend the functionality of the store. This can be useful for
                logging, crash reporting, or handling asynchronous actions.
              </li>
              <li>
                Time travel: Redux has a time-traveling debugger that allows you
                to replay actions and see how your state changes over time. This
                can be useful for debugging and understanding complex state
                changes.
              </li>
              <li>
                Community and ecosystem: Redux has a large community and a rich
                ecosystem of tools and libraries. This can make it easier to
                find solutions to common problems and integrate with other
                technologies.
              </li>
            </ul>
          </p>
        </article>
        <img src={reduxlogo} alt="redux-logo" width={300} height={300} />
      </section>
      <h1>Code Preview</h1>
      <section className="informations-section">
        <ReduxCodePreview code="storeText" />
        <article>
          <h3>Step 1</h3>
          <p>
            First, you need to create a store that holds your application&apos;s
            state. You can do this using the configureStore function from the
            Redux toolkit, which provides a convenient way to set up a store
            with a reducer.
          </p>
          <p>
            In this example, we have a counter slice that is being used in the
            store to manage the state of the counter
          </p>
        </article>
      </section>
      <section className="informations-section">
        <article>
          <h3>Step 2</h3>
          <p>
            Next, you need to define a slice that describes the changes you want
            to make to that state. You can do this using the createSlice
            function from the Redux toolkit, which provides a convenient way to
            define a slice with a reducer and actions.
          </p>
          <p>
            In this exampel we have a counter slice that has two actions
            increment and decrement
          </p>
        </article>
        <ReduxCodePreview code="sliceText" />
      </section>
      <section className="informations-section">
        <ReduxCodePreview code="usageText" />
        <article>
          <h3>Step 3</h3>
          <p>
            Finally, you can use the useSelector and useDispatch hooks from the
            react-redux package to read and update the state in your components.
            You can use the useSelector hook to read the state, and the
            useDispatch hook to dispatch actions to update the state.
          </p>
          <p>
            Here&apos;s a basic example of how you might use Redux in a React
            application:
          </p>
        </article>
      </section>
      <section className="informations-section">
        <article>
          <h3>When to use Redux</h3>
          <p>
            Redux is a good choice for large applications where you need a
            predictable state container. It&apos;s a good choice for
            applications that have complex state management needs, such as
            applications with large data sets or complex user interfaces.
          </p>
          <p>
            Redux is also a good choice for applications that need to be
            testable. It&apos;s designed to be easy to test, with a single
            source of truth that makes it easy to write unit tests and
            integration tests.
          </p>
          <p>
            Finally, Redux is a good choice for applications that need to be
            maintainable. It encourages you to write code in a predictable and
            consistent way, which can make your application easier to maintain
            over time.
          </p>
        </article>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/redux')({
  component: ReduxComponent,
})
