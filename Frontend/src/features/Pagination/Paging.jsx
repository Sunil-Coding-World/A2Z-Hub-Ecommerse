import React, { useEffect, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { ITEM_PER_PAGE } from "../../app/constant"
import { fetchAllProductsByFilter, selectTotalItems } from "../Product/ProductListSlice"
import { useDispatch, useSelector } from "react-redux"

const Paging = () => {
  const [page, setpage] = useState(1)
  const dispatch = useDispatch()

  const totalItems = useSelector(selectTotalItems);

  const handlepage = (e, page) => {
    e.preventDefault()
    console.log(page)
    setpage(page)
  }

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEM_PER_PAGE }
    dispatch(fetchAllProductsByFilter(pagination))
  }, [page])

  useEffect(() => {
    setpage(1)
  }, [totalItems])
  

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium">
              {(page - 1) * ITEM_PER_PAGE + 1}
            </span>
            to
            {page * ITEM_PER_PAGE}
            <span className="font-medium"> </span> of
            <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {Array.from({ length: Math.ceil(totalItems / ITEM_PER_PAGE) }).map(
              (e, index) => (
                <div
                  onClick={(e) => handlepage(e, index + 1)}
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center ${
                    index + 1 === page
                      ? " bg-indigo-600  text-white"
                      : " text-gray-700"
                  } px-4 py-2 text-sm font-semibold
                   focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-indigo-600`}
                >
                  {index + 1}
                </div>
              )
            )}

            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Paging
