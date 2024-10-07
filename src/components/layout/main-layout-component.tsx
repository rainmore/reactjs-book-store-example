import React                 from 'react';
import { CurrentUser }       from '../../services/auth/types';
import { MainMenuComponent } from './nav/main-menu-component';

type Props = {
  currentUser: CurrentUser | null,
  element: React.FC
}

export const MainLayoutComponent: React.FC<Props> = (props) => {

  return (
    <>
      <section className="main-content columns is-fullheight">
        <div className="column is-3 is-narrow-mobile is-fullheight section">
          <MainMenuComponent />
        </div>

        <div className="container column is-10 section">
          <props.element />
        </div>
      </section>
    </>
  );
};
