import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {
  useEffect,
  useState
}                          from 'react';
import { useNavigate }     from 'react-router-dom';
import { AppRoutePaths }   from '../../app-routes.ts';
import { authService }     from '../../services/auth/auth-service.ts';
import { CurrentUser }     from '../../services/auth/types.ts';


type Props = {
  currentUser: CurrentUser | null
  setCurrentUser: any
}

const LoginPage: React.FC<Props> = ({ currentUser, setCurrentUser }) => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const redirectHandler = () => {
    navigate(AppRoutePaths.DEASH_BOARD);
  };

  useEffect(() => {
    if (currentUser !== null) {
      console.log('logged in user doesn\'t need to login again.');
      redirectHandler();
    }
  });

  const onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    setLoading(true);
    try {
      const target = event.target as typeof event.target & {
        email: { value: string };
        password: { value: string };
      };

      authService.login({
        username: target.email.value,
        password: target.password.value
      }).then(() => {
        setCurrentUser(authService.getAuthContext()?.currentUser);
        redirectHandler();
      });

    } catch (ex) {
      console.error(ex);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <section className="hero box">
          <div className="hero-body">
            <h1 className="title">Login</h1>
            <div className="hero-body container">
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input type="email" name="email" maxLength={250} placeholder="Please enter email" className="input" required={true} />
                  <span className="icon is-small is-left">
                   <FontAwesomeIcon icon="envelope" />
                </span>
                  <span className="icon is-small is-right">
                  <FontAwesomeIcon icon="check" />
                </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input type="password" name="password" maxLength={50} placeholder="Please enter password" className="input"
                         required={true} />
                  <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="lock" />
                </span>
                </div>
              </div>
              <div className="field is-grouped mt-4">
                <div className="control">
                  <button className="button is-link is-light" type="reset">Cancel</button>
                </div>

                <div className="control">
                  <button className="button is-link" disabled={loading}>Login</button>
                </div>
              </div>

              <div className="field is-grouped mt-4">
                <div className="control">
                  <a href="#">Forget password?</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default LoginPage;