import React from 'react'

import '../assets/css/styles.css'

interface Props {
	children: React.ReactNode
}

const Base: React.FC<Props> = ({ children }) => {
	return (
		<main>
			{children}
		</main>
	)
}

export default Base
