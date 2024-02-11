import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { routeTree } from './routeTree.gen'
import { store } from './state/store'
import './index.scss'

const queryClient = new QueryClient()

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
