import React             from 'react';
import { Outlet }        from 'react-router-dom';
import { CurrentUser } from '../../services/auth/types';
import { MainNavComponent } from './main/main-nav-component';
import { MainMenuComponent } from './main/main-menu-component';

type Props = {
  currentUser: CurrentUser | null
}

export const MainLayoutComponent: React.FC<Props> = ({currentUser}) => {

  return (
    <>
      <MainNavComponent currentUser={currentUser} />
      <section className="main-content columns is-fullheight">
        <div className="column is-3 is-narrow-mobile is-fullheight section">
          <MainMenuComponent />
        </div>

        <div className="container column is-10 section">
          <Outlet />
        </div>
      </section>
    </>
  );
};
