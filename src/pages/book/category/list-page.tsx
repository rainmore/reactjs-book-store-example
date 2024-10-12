import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { AppRoutePaths } from '../../../app-routes'
import LoadingComponent from '../../../components/layout/loading-component'
import PaginationComponent from '../../../components/pagination/pagination-component'
import { Page } from '../../../services/api/types'
import { bookService } from '../../../services/book/book-service'
import { Category } from '../../../services/book/types'
import { PaginationService } from '../../../services/pagination-service'
import { toastService } from '../../../services/toast-service'

const ListPage: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const paginationService = new PaginationService()

  const listPageSearchParam = paginationService.urlService.getSearchParameter()

  const [pageData, setPageDate] = useState<Page<Category> | null>(null)

  useEffect(() => {
    bookService
      .findCategories(paginationService.getPageable())
      .then((data) => {
        setPageDate(data)
        setLoading(false)
      })
      .catch((error) => {
        toastService.error(error.message)
      })
  }, [])

  return (
    <>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href={AppRoutePaths.BOOK_LIST}>Books</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Categories
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="title">Book Categories</h1>
      <div className="box">
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            <table className="table is-fullwidth is-striped is-hoverable">
              <thead>
                <tr>
                  <th className="col-id">#</th>
                  <th>Name</th>
                  <th className="col-control"></th>
                </tr>
              </thead>
              <tbody>
                {pageData &&
                  pageData.content.map((row, idx) => {
                    return (
                      <tr key={`row-book-${row.id}-${idx}`}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>
                          <a href={`/book/category/${row.id}/edit${listPageSearchParam}`} title="Edit" className="button is-text is-light">
                            <span className="icon">
                              <FontAwesomeIcon icon="pen-to-square" />
                            </span>
                          </a>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
            <PaginationComponent page={pageData} />
          </>
        )}
      </div>
    </>
  )
}

export default ListPage
