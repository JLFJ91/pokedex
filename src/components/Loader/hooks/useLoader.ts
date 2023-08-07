import { useState } from 'react'

export function useLoader () {
	const [loading, setLoading] = useState(false)

	const changeLoading = (load: boolean): void => {
		setLoading(load)
	}

	return { loading, changeLoading }
}
