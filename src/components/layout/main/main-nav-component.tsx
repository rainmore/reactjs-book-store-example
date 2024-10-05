import React             from 'react';
import { useNavigate }   from 'react-router-dom';
import { AppRoutePaths } from '../../../app-routes.ts';
import { authService }   from '../../../services/auth/auth-service.ts';
import { CurrentUser }   from '../../../services/auth/types';
import { toastService } from '../../../services/toast-service.ts';

type Props = {
  currentUser: CurrentUser | null
  setCurrentUser: any
}

export const MainNavComponent: React.FC<Props> = ({currentUser, setCurrentUser}) => {

  const navigate = useNavigate();

  const onLogout = () => {
      authService.resetAuthContext();
      setCurrentUser(authService.getAuthContext());
      toastService.info("You've logged out")
      navigate(AppRoutePaths.AUTH_LOGIN);
  }

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
                <a className="navbar-item" onClick={onLogout}>Logout</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
