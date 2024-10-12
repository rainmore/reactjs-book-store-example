import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppRoutePaths } from '../../../app-routes'
import './main-menu-component.scss'

export const MainMenuComponent: React.FC = () => {
  const currentPathName = useLocation().pathname

  const getActivePathClass = (path: string): string => {
    return path === currentPathName ? 'is-active' : ''
  }

  return (
    <>
      <aside className="menu main-menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <Link to={AppRoutePaths.DEASH_BOARD} className={getActivePathClass(AppRoutePaths.DEASH_BOARD)}>
              Dashboard
            </Link>
          </li>
        </ul>
        <p className="menu-label">Books</p>
        <ul className="menu-list">
          <li>
            <Link to={AppRoutePaths.BOOK_LIST} className={getActivePathClass(AppRoutePaths.BOOK_LIST)}>
              Books
            </Link>
          </li>
          <li>
            <Link to={AppRoutePaths.BOOK_CATEGORY_LIST} className={getActivePathClass(AppRoutePaths.BOOK_CATEGORY_LIST)}>
              Categories
            </Link>
          </li>
        </ul>
      </aside>

      <aside className="menu sub-menu menu-end is-hidden-mobile">
        <ul className="menu-list">
          <li>
            <a href="https://rainmore.com.au" target="_blank">
              Powered By Rainmore
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}
