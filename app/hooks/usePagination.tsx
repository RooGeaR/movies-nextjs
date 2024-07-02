import { useState } from "react"
import { Movie } from "../types"

type ItemsType = Movie[] | []

export const usePagination = (items: ItemsType, page = 1, perPage = 5) => {
  const [activePage, setActivePage] = useState(page)
  const totalPages = Math.ceil(items.length / perPage)
  const offset = perPage * (activePage - 1)
  const paginatedItems = items.slice(offset, perPage * activePage)

  const nextPage = () => {
    setActivePage(p => p < totalPages ? p + 1 : p)
  }

  const previousPage = () => {
    setActivePage(p => p > 1 ? p - 1 : p)
  }

  const resetPage = () => {
    if (activePage === totalPages) {
      setActivePage(page)
    } else {
      setActivePage(totalPages)
    }
  }

  return {
    activePage,
    nextPage,
    previousPage,
    totalPages,
    totalItems: items.length,
    items: paginatedItems,
    resetPage
  }
}