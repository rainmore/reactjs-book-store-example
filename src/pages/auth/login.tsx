import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext, CurrentUser } from '../../services/context';


export const LoginPage: React.FC = () => {

  const appContext = useContext(AppContext);

  const submit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    }

    const currentUser: CurrentUser = {
      username: target.email.value,
      firstName: '',
      lastName: ''
    }
    appContext.currentUser = currentUser;
    console.log(appContext);
  };

  return (
    <>
    <form onSubmit={submit}>
      <section className="hero box">
        <div className="hero-body">
          <h1 className="title">Login</h1>
          <div className="hero-body container">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input type="email" name="email" placeholder="Please enter email" className="input" required="true" />
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
                <input type="password" name="password" placeholder="Please enter password" className="input" required="true" />
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
      </form>
    </>
  );
};
