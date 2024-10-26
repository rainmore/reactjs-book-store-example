import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutePaths } from '../../app-routes.ts'
import { authService } from '../../services/auth/auth-service.ts'
import { CurrentUser } from '../../services/auth/types.ts'
import { toastService } from '../../services/toast-service.ts'

type Props = {
  currentUser: CurrentUser | null
  setCurrentUser: any
}

type FormFields = {
  email: string
  password: string
}

const LoginPage: React.FC<Props> = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState(false);

  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState<Map<string, string>>(new Map<string, string>)

  const validateValues = (formFields: FormFields) => {
    const errorObj = new Map<string, string>

    if (formFields.email.length < 15) {
      errorObj.set('email', 'Email is too short');
    }
    if (formFields.password.length < 5) {
      errorObj.set('password', 'Password is too short');
    }
    return errorObj
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setErrors(validateValues(formFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    setLoading(true)
    try {
      authService
        .login({
          username: formFields.email,
          password: formFields.password,
        })
        .then(() => {
          const currentUser = authService.getAuthContext()?.currentUser
          setCurrentUser(currentUser)
          toastService.success(`Welcome back, ${currentUser?.account.firstname}!`)
          redirectHandler()
        })
        .catch((error) => {
          toastService.error(error.message)
        })
    } catch (ex) {
      console.error(ex)
    } finally {
      setLoading(false)
    }
  };


  const redirectHandler = () => {
    navigate(AppRoutePaths.DEASH_BOARD)
  }

  useEffect(() => {
    if (currentUser !== null) {
      toastService.warn('logged in user doesn\'t need to login again.')
      redirectHandler()
    }

    if (errors.size === 0 && submitting) {
      finishSubmit();
    }

  }, [errors])

  const className = classNames('button', 'is-link', {
    'is-loading': loading,
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="hero box">
          <div className="hero-body">
            <h1 className="title">Login</h1>
            <div className="hero-body container">
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    type="email"
                    name="email"
                    maxLength={250}
                    placeholder="Please enter email"
                    className="input" required={true}
                    onChange={handleChange} />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="check" />
                  </span>
                </div>
                {errors.has('email') ? (
                  <p className="error">{errors.get('email')}</p>
                ) : null}
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input
                    type="password"
                    name="password"
                    maxLength={50}
                    placeholder="Please enter password"
                    className="input"
                    required={true}
                    onChange={handleChange}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="lock" />
                  </span>
                </div>
                {errors.has('password') ? (
                  <p className="error">{errors.get('password')}</p>
                ) : null}
              </div>
              <div className="field is-grouped mt-4">
                <div className="control">
                  <button className="button is-link is-light" type="reset">
                    Cancel
                  </button>
                </div>

                <div className="control">
                  <button className={className}>
                    Login
                  </button>
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
  )
}

export default LoginPage
