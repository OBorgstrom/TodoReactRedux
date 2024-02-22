/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ZustandDemoImport } from './routes/zustandDemo'
import { Route as ZustandImport } from './routes/zustand'
import { Route as ReduxDemoImport } from './routes/reduxDemo'
import { Route as ReduxImport } from './routes/redux'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ZustandDemoRoute = ZustandDemoImport.update({
  path: '/zustandDemo',
  getParentRoute: () => rootRoute,
} as any)

const ZustandRoute = ZustandImport.update({
  path: '/zustand',
  getParentRoute: () => rootRoute,
} as any)

const ReduxDemoRoute = ReduxDemoImport.update({
  path: '/reduxDemo',
  getParentRoute: () => rootRoute,
} as any)

const ReduxRoute = ReduxImport.update({
  path: '/redux',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/redux': {
      preLoaderRoute: typeof ReduxImport
      parentRoute: typeof rootRoute
    }
    '/reduxDemo': {
      preLoaderRoute: typeof ReduxDemoImport
      parentRoute: typeof rootRoute
    }
    '/zustand': {
      preLoaderRoute: typeof ZustandImport
      parentRoute: typeof rootRoute
    }
    '/zustandDemo': {
      preLoaderRoute: typeof ZustandDemoImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  ReduxRoute,
  ReduxDemoRoute,
  ZustandRoute,
  ZustandDemoRoute,
])

/* prettier-ignore-end */
