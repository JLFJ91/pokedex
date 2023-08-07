import { PAGINATION_INITIAL_PAGE, PAGINATION_MAX_PAGES_TO_SHOW } from '../config/config'
import { type Pagination } from '../types'

export function getPagination (currentPage: number, totalPages: number, maxPagesToShow = PAGINATION_MAX_PAGES_TO_SHOW): Pagination {
	const middleOfPaginator = Math.floor(maxPagesToShow / 2)

	let initialPageToShow

	if (currentPage - middleOfPaginator <= 1) {
		initialPageToShow = PAGINATION_INITIAL_PAGE
	} else if (currentPage + middleOfPaginator > totalPages) {
		initialPageToShow = totalPages - maxPagesToShow + PAGINATION_INITIAL_PAGE
	} else {
		initialPageToShow = currentPage - middleOfPaginator
	}

	const pagination = []

	for (let index = initialPageToShow; index < (initialPageToShow + maxPagesToShow); index++) {
		pagination.push(index)
	}

	return pagination
}
