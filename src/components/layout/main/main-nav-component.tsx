import React           from 'react';
import { CurrentUser } from '../../../services/auth/types';

type Props = {
  currentUser: CurrentUser | null
}

export const MainNavComponent: React.FC<Props> = ({currentUser}) => {

  return (
    <>
      <nav className="navbar is-flex-tablet is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item title" href="#">
            {import.meta.env.VITE_APP_TITLE}
          </a>
        </div>

        {currentUser && (
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">{currentUser.account.firstname} {currentUser.account.lastname}</a>

              <div className="navbar-dropdown is-right">
                <a className="navbar-item">Change Profile</a>
                <a className="navbar-item">Update password</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Logout</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
