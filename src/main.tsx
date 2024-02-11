import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from 'react-query'

import { store } from './state/store'
import './index.scss'
import { routeTree } from './routeTree.gen'

// Set up a Router instance
const router = createRouter({
  routeTree, // hämtar in alla routes som finns i applikationen
  defaultPreload: 'intent', // default preload intent betyder att vi laddar in alla routes som finns i applikationen
})

// Register things for typesafety <-- förklara ganska bra vad det gör
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
