/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as CharactersIndexImport } from './routes/characters/index'
import { Route as CharactersCharacterImport } from './routes/characters/$character'
import { Route as CharactersCharacterEditImport } from './routes/characters/$character/edit'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CharactersIndexRoute = CharactersIndexImport.update({
  id: '/characters/',
  path: '/characters/',
  getParentRoute: () => rootRoute,
} as any)

const CharactersCharacterRoute = CharactersCharacterImport.update({
  id: '/characters/$character',
  path: '/characters/$character',
  getParentRoute: () => rootRoute,
} as any)

const CharactersCharacterEditRoute = CharactersCharacterEditImport.update({
  id: '/edit',
  path: '/edit',
  getParentRoute: () => CharactersCharacterRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/characters/$character': {
      id: '/characters/$character'
      path: '/characters/$character'
      fullPath: '/characters/$character'
      preLoaderRoute: typeof CharactersCharacterImport
      parentRoute: typeof rootRoute
    }
    '/characters/': {
      id: '/characters/'
      path: '/characters'
      fullPath: '/characters'
      preLoaderRoute: typeof CharactersIndexImport
      parentRoute: typeof rootRoute
    }
    '/characters/$character/edit': {
      id: '/characters/$character/edit'
      path: '/edit'
      fullPath: '/characters/$character/edit'
      preLoaderRoute: typeof CharactersCharacterEditImport
      parentRoute: typeof CharactersCharacterImport
    }
  }
}

// Create and export the route tree

interface CharactersCharacterRouteChildren {
  CharactersCharacterEditRoute: typeof CharactersCharacterEditRoute
}

const CharactersCharacterRouteChildren: CharactersCharacterRouteChildren = {
  CharactersCharacterEditRoute: CharactersCharacterEditRoute,
}

const CharactersCharacterRouteWithChildren =
  CharactersCharacterRoute._addFileChildren(CharactersCharacterRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/characters/$character': typeof CharactersCharacterRouteWithChildren
  '/characters': typeof CharactersIndexRoute
  '/characters/$character/edit': typeof CharactersCharacterEditRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/characters/$character': typeof CharactersCharacterRouteWithChildren
  '/characters': typeof CharactersIndexRoute
  '/characters/$character/edit': typeof CharactersCharacterEditRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/characters/$character': typeof CharactersCharacterRouteWithChildren
  '/characters/': typeof CharactersIndexRoute
  '/characters/$character/edit': typeof CharactersCharacterEditRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/characters/$character'
    | '/characters'
    | '/characters/$character/edit'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/characters/$character'
    | '/characters'
    | '/characters/$character/edit'
  id:
    | '__root__'
    | '/'
    | '/characters/$character'
    | '/characters/'
    | '/characters/$character/edit'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CharactersCharacterRoute: typeof CharactersCharacterRouteWithChildren
  CharactersIndexRoute: typeof CharactersIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CharactersCharacterRoute: CharactersCharacterRouteWithChildren,
  CharactersIndexRoute: CharactersIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/characters/$character",
        "/characters/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/characters/$character": {
      "filePath": "characters/$character.tsx",
      "children": [
        "/characters/$character/edit"
      ]
    },
    "/characters/": {
      "filePath": "characters/index.tsx"
    },
    "/characters/$character/edit": {
      "filePath": "characters/$character/edit.tsx",
      "parent": "/characters/$character"
    }
  }
}
ROUTE_MANIFEST_END */
