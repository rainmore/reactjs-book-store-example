import React, { useEffect, useState } from 'react'
import { bookService } from '../../services/book/book-service'
import { toastService } from '../../services/toast-service'
import { Page, Pageable } from '../../services/api/types'
import { Book } from '../../services/book/types'
import { Axios, CancelToken } from 'axios'
import LoadingComponent from '../../components/layout/loading-component'

const ListPage: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const [pageable, setPageable] = useState<Pageable | null>(null)
  const [pageData, setPageDate] = useState<Page<Book> | null>(null)

  useEffect(() => {
    bookService
      .find(pageable || undefined)
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
      <div className="block">
        <h1 className="title">Books</h1>
      </div>
      <div className="box">
        {loading ? (
          <LoadingComponent />
        ) : (
          <table className="table is-striped is-hoverable">
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
                      <td>{row.publicationDate}</td>
                      <td></td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default ListPage
