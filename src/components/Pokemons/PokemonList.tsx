import { type PokemonWithId } from './types'

import PokemonCard from './PokemonCard'

interface Props {
	pokemons: PokemonWithId[]
}

const PokemonList: React.FC<Props> = ({ pokemons }) => {
	return (
		<ul className="grid">
			{
				pokemons.map(p => {
					return <PokemonCard name={p.name} img={p.img} types={p.types} key={p.id}/>
				})
			}
		</ul>
	)
}

export default PokemonList
