import React from 'react';

import { NavComponent } from './nav/index';
import { MenuComponent } from './menu/index';

interface Props {
  children: React.ReactNode
}

export const MainLayoutComponent: React.FC<Props> = ({ children }) => {
  const props = {
    isAuthenticated: true,
  };
  return (
    <>
      <NavComponent isAuthenticated={props.isAuthenticated}></NavComponent>
      <section className="main-content columns is-fullheight">
        <div className="column is-3 is-narrow-mobile is-fullheight section">
          <MenuComponent />
        </div>

        <div className="container column is-10 section">
          <section>{children}</section>
        </div>
      </section>
    </>
  );
};
