import React, { useEffect, useState } from 'react'
import LoadingComponent from '../../components/layout/loading-component'
import PaginationComponent from '../../components/pagination/pagination-component'
import { Page } from '../../services/api/types'
import { bookService } from '../../services/book/book-service'
import { Book } from '../../services/book/types'
import { PaginationService } from '../../services/pagination-service'
import { toastService } from '../../services/toast-service'

const ListPage: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const paginationService = new PaginationService()

  const [pageData, setPageDate] = useState<Page<Book> | null>(null)

  useEffect(() => {
    bookService
      .find(paginationService.getPageable())
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
      <h1 className="title">Books</h1>
      <div className="box">
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            <table className="table is-fullwidth is-striped is-hoverable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Publish Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {pageData &&
                  pageData.content.map((row, idx) => {
                    return (
                      <tr key={`row-book-${row.id}-${idx}`}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.category?.name}</td>
                        <td>{row.publicationDate.toString()}</td>
                        <td></td>
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
