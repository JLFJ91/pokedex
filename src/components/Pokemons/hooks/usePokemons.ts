import { type Url, type PokemonWithId } from '../types'

import { useEffect, useState } from 'react'

import { usePage } from '../../Pagination/hooks/usePage'
import { getPokemons, getPokemonsUrls } from '../services/pokemonService'
import { useLoader } from '../../Loader/hooks/useLoader'

export function usePokemons (limit = 20): {
	pokemons: PokemonWithId[]
	loading: boolean
} {
	const { currentPage } = usePage(1)

	const [pokemonUrls, setpokemonUrls] = useState<Url[]>([])
	const [pokemons, setPokemons] = useState<PokemonWithId[]>([])

	const { loading, changeLoading } = useLoader()

	useEffect(() => {
		changeLoading(true)

		getPokemonsUrls(currentPage, limit)
			.then(data => {
				setpokemonUrls(data)
			})
			.catch(e => { console.log(e) })
	}, [currentPage, limit])

	useEffect(() => {
		if (pokemonUrls.length === 0) {
			return
		}

		getPokemons(pokemonUrls)
			.then(data => { setPokemons(data) })
			.catch(e => { console.log(e) })
			.finally(() => { changeLoading(false) })
	}, [pokemonUrls])

	return { pokemons, loading }
}
