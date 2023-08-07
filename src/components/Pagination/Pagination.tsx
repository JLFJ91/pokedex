import { Link } from 'react-router-dom'

import { usePagination } from './hooks/usePagination'
import React from 'react'

interface Props {
	totalCount: number
	baseLink: string
}

const Pagination: React.FC<Props> = ({ totalCount, baseLink }) => {
	const { pagination } = usePagination(totalCount)

	return (
		<ul className="pagination">
			{pagination.map((p, i) => {
				return <li key={i}>
					<Link to={`${baseLink}${p}`} className="btn">{p}</Link>
				</li>
			})}
		</ul>
	)
}

export default Pagination
