import React from 'react'

function Pagination({ pnum, totalcount }) {
  const pages = Array.from({ length: totalcount }, (_, i) => i + 1);
  const visiblePages = pages.slice(Math.max(1, pnum - 2), Math.min(pnum + 3, totalcount + 1));

  return (
    <div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {pnum > 1 && <li className="page-item"><a className="page-link" href={`?ind=1`}>First</a></li>}
          {visiblePages.map((page) => (
            <li key={page} className={`page-item ${page === pnum ? 'active' : ''}`}>
              <a className="page-link" href={page === pnum ? '#' : `?ind=${page}`}>{page}</a>
            </li>
          ))}
          {pnum < totalcount && <li className="page-item"><a className="page-link" href={`?ind=${totalcount}`}>Last</a></li>}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
