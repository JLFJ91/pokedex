import { useParams } from 'react-router-dom'
import { PAGINATION_INITIAL_PAGE } from '../config/config'

export function usePage (initialPage = PAGINATION_INITIAL_PAGE): { currentPage: number } {
	const { page } = useParams()

	if (page == null) return { currentPage: initialPage }

	return { currentPage: parseInt(page) }
}
