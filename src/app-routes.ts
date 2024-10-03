import React from 'react';

export enum AppRoutePaths {
  AUTH_LOGIN = '/auth/login',
  AUTH_FORGET_PASSWORD = '/auth/forget-password',
  NOT_FOUND = '*',
  DEASH_BOARD = '/',
  BOOK_LIST = '/book',
}

interface AppRoute {
  path: AppRoutePaths
  element: React.FunctionComponent
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
]
