import { type CSSProperties } from 'react'
import { type PokemonType } from '../types'

import { DARK_BG_COLORS } from '../config/styles'

export function getStyleByTypes (types: PokemonType[]): CSSProperties {
	// css vars string[]
	const cssVars = types.map(t => {
		return `var(--${t.name})`
	})

	const styles = (types.length > 1)
		? { background: `linear-gradient(${cssVars.join(', ')})` }
		: { background: cssVars[0] }

	// if types has a dark bg set text color to white
	if (DARK_BG_COLORS.includes(types[0].name)) {
		return { ...styles, color: 'var(--white)' }
	}

	return styles
}
