import React from 'react'
import { ActionFunction } from 'react-router-dom'

export enum AppRoutePaths {
  AUTH_LOGIN = '/auth/login',
  AUTH_FORGET_PASSWORD = '/auth/forget-password',
  NOT_FOUND = '*',
  DEASH_BOARD = '/',
  BOOK_LIST = '/book',
  BOOK_ADD = '/book/add',
  BOOK_EDIT = '/book/:bookId/edit',
  BOOK_CATEGORY_LIST = '/book/category',
  BOOK_CATEGORY_ADD = '/book/category/add',
  BOOK_CATEGORY_EDIT = '/book/category/:categoryId/edit',
}

interface AppRoute {
  path: AppRoutePaths
  action?: ActionFunction
  element: React.LazyExoticComponent<React.FunctionComponent<any>>
  requireAuth: boolean
}

export const appRoutes: AppRoute[] = [
  {
    path: AppRoutePaths.AUTH_FORGET_PASSWORD,
    element: React.lazy(() => import('./pages/auth/forget-password-page')),
    requireAuth: false,
  },
  {
    path: AppRoutePaths.NOT_FOUND,
    element: React.lazy(() => import('./pages/not-found-page')),
    requireAuth: false,
  },
  {
    path: AppRoutePaths.DEASH_BOARD,
    element: React.lazy(() => import('./pages/dashboard-page')),
    requireAuth: true,
  },
  {
    path: AppRoutePaths.BOOK_LIST,
    element: React.lazy(() => import('./pages/book/list-page')),
    requireAuth: true,
  },
  {
    path: AppRoutePaths.BOOK_ADD,
    element: React.lazy(() => import('./pages/book/form-page')),
    requireAuth: true,
  },
  {
    path: AppRoutePaths.BOOK_CATEGORY_LIST,
    element: React.lazy(() => import('./pages/book/category/list-page')),
    requireAuth: true,
  },
  {
    path: AppRoutePaths.BOOK_CATEGORY_EDIT,
    // action: {({ params }) => {}},
    element: React.lazy(() => import('./pages/book/category/form-page')),
    requireAuth: true,
  },
]
