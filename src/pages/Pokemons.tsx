import Pagination from '../components/Pagination/Pagination'
import PokemonList from '../components/Pokemons/PokemonList'

import { usePokemons } from '../components/Pokemons/hooks/usePokemons'

import { getMaxNumberOfPokemons } from '../components/Pokemons/services/pokemonService'

import { PAGES_ROUTES } from '../config/routes'
import Loader from '../components/Loader/Loader'
import { useEffect, useState } from 'react'

const Pokemons: React.FC = () => {
	const { pokemons, loading } = usePokemons()
	const [totalCount, setTotalCount] = useState(0)

	useEffect(() => {
		getMaxNumberOfPokemons()
			.then(data => { setTotalCount(data) })
			.catch(e => { console.log(e) })
	}, [])

	if (loading) {
		return <Loader />
	}

	return (
		<div className="pokemons">
			<PokemonList pokemons={pokemons} />

			<Pagination baseLink={PAGES_ROUTES.pokemons} totalCount={totalCount} />
		</div>
	)
}

export default Pokemons
