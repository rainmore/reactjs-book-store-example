import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginPage = () => {
  return (
    <>
      <section className="hero box">
        <div className="hero-body">
          <h1 className="title">Login</h1>

          <div className="hero-body container">
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input type="email" name="username" placeholder="Please enter username" className="input" />
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
                <input type="password" name="password" placeholder="Please enter password" className="input" />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="lock" />
                </span>
              </div>
            </div>
            <div className="field is-grouped mt-4">
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>

              <div className="control">
                <button className="button is-link">Login</button>
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
    </>
  );
};
