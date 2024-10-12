import React, { useEffect, useState } from 'react'
import { AppRoutePaths } from '../../../app-routes'
import ButtonComponent, { ButtonType } from '../../../components/form/button-component'
import LabelComponent from '../../../components/form/label-component'
import LoadingComponent from '../../../components/layout/loading-component'
import { UrlService } from '../../../services/url-service'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Props {
  disabled: boolean
}

interface IFormInput {
  id: number
  name: string
  parentId?: number
}

const FormPage: React.FC<Props> = ({ disabled }) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  const [loading, setLoading] = useState<boolean>(true)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const urlService = new UrlService()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href={AppRoutePaths.BOOK_LIST}>Books</a>
          </li>
          <li>
            <a href={`${AppRoutePaths.BOOK_CATEGORY_LIST}${urlService.getSearchParameter()}`}>Categories</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Edit Category
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="title">Edit Book Category</h1>
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
                    <input className="input" type="text" placeholder="Book Name" {...register("name", { required: true, maxLength: 50 })} />
                  </div>
                </div>

                <div className="field">
                  <LabelComponent required={true}>Parent</LabelComponent>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>Select Parent</option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field is-grouped is-grouped-right">
                  <div className="control">
                    <ButtonComponent buttonType={ButtonType.PRIMARY} disabled={disabled} loading={submitted}>
                      Submit
                    </ButtonComponent>
                  </div>
                  <div className="control">
                    <ButtonComponent buttonType={ButtonType.TERTIARY} disabled={disabled} loading={false}>
                      Cancel
                    </ButtonComponent>
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
