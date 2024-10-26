import React from 'react'
import { Page } from '../../services/api/types'
import { PaginationService } from '../../services/pagination-service'

interface Props {
  page: Page<any> | null
}

const PaginationComponent: React.FC<Props> = ({ page }: Props) => {
  const paginationService = new PaginationService()

  return (
    page && !page.empty && (
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        {page.first ? (
          <>
            <a className="pagination-previous is-disabled">&lt;&lt;</a>
            <a className="pagination-previous is-disabled">&lt;</a>
          </>
        ) : (
          <>
            <a href={paginationService.firstPagePath()} className="pagination-previous">
              &lt;&lt;
            </a>
            <a href={paginationService.prevPagePath(page)} className="pagination-previous">
              &lt;
            </a>
          </>
        )}
        {page.last ? (
          <>
            <a className="pagination-next is-disabled">&gt;</a>
            <a className="pagination-next is-disabled">&gt;&gt;</a>
          </>
        ) : (
          <>
            <a href={paginationService.nextPagePath(page)} className="pagination-next">
              &gt;
            </a>
            <a href={paginationService.lastPagePath(page)} className="pagination-next">
              &gt;&gt;
            </a>
          </>
        )}
        <ul className="pagination-list">
          {paginationService.getPaginationRage(page).map((number, idx) => {
            const displayNumber = number + 1
            return (
              <li key={`pagination-page-item-${number}-${idx}`}>
                {number == page.number ? (
                  <a className="pagination-link is-current" aria-label={`Page ${displayNumber}`} aria-current="page">
                    {displayNumber}
                  </a>
                ) : (
                  <a href={paginationService.buildPath(number)} className="pagination-link" aria-label={`Goto page ${displayNumber}`}>
                    {displayNumber}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    )
  )
}

export default PaginationComponent
