import { type Pagination } from '../types'

import { useEffect, useState } from 'react'
import { usePage } from './usePage'

import { getPagination } from '../services/paginationService'

import { PAGINATION_LIMIT, PAGINATION_MAX_PAGES_TO_SHOW } from '../config/config'

export function usePagination (totalCount: number, limit = PAGINATION_LIMIT, maxPagesToShow = PAGINATION_MAX_PAGES_TO_SHOW): {
	pagination: Pagination
} {
	const { currentPage } = usePage()

	const [pagination, setPagination] = useState<Pagination>([])

	useEffect(() => {
		if (totalCount !== 0) {
			const totalPages = Math.ceil(totalCount / limit)

			setPagination(getPagination(currentPage, totalPages, maxPagesToShow))
		}
	}, [currentPage, limit, maxPagesToShow, totalCount])

	return { pagination }
}
