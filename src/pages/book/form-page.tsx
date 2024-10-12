import React, { useEffect, useState } from 'react'
import LoadingComponent from '../../components/layout/loading-component'
import { bookService } from '../../services/book/book-service'
import ButtonComponent, { ButtonType } from '../../components/form/button-component'
import LabelComponent from '../../components/form/label-component'


interface Props {
  disabled: boolean
}

const FormPage: React.FC<Props> = ({ disabled }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [submitted, setSubmitted] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <h1 className="title">Books</h1>
      <div className="box">
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            <form>
              <fieldset disabled={disabled}>
              <div className="field">
                <LabelComponent required={true}>Name</LabelComponent>
                <div className="control">
                  <input className="input" type="text" placeholder="Book Name" />
                </div>
              </div>

              {/* <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </div>
                <p className="help is-success">This username is available</p>
              </div> */}

              {/* <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
                <p className="help is-danger">This email is invalid</p>
              </div> */}

              <div className="field">
              <LabelComponent required={true}>Category</LabelComponent>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Select Category</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>

              <div className="field">
                <div className="control radios">
                  <label className="radio">
                    <input type="radio" name="question" /> Yes
                  </label>
                  <label className="radio">
                    <input type="radio" name="question" /> No
                  </label>
                </div>
              </div>

              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <ButtonComponent buttonType={ButtonType.PRIMARY} disabled={disabled} loading={submitted} text={'Submit'}  />
                </div>
                <div className="control">
                  <ButtonComponent buttonType={ButtonType.TERTIARY} disabled={disabled} loading={false} text={'Cancel'}  />
                </div>
              </div>
              </fieldset>
            </form>
          </>
        )}
      </div>
    </>
  )
}

export default FormPage
