import React    from 'react';
import './main-menu-component.scss';
import { Link } from 'react-router-dom';

export const MainMenuComponent: React.FC = () => {
  return (
    <>
      <aside className="menu main-menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <Link to="/book">Books</Link>
          </li>
        </ul>
      </aside>

      <aside className="menu sub-menu menu-end is-hidden-mobile">
        <ul className="menu-list">
          <li>
            <a href="https://rainmore.com.au" target="_blank">Powered By Rainmore</a>
          </li>
        </ul>
      </aside>
    </>
  );
};
