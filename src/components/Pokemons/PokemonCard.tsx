import { getStyleByTypes } from './services/pokemonCardService'
import { type Pokemon } from './types'

const PokemonCard: React.FC<Pokemon> = ({ name, types, img }) => {
	const styles = getStyleByTypes(types)

	return (
		<li className="card" style={styles}>
			<div className="content">
				<h3>{name}</h3>
				{types.map((t) => {
					return <span className="label" key={t.id}>{t.name}</span>
				})}
			</div>
			<img src={img} alt={name} />
		</li>
	)
}

export default PokemonCard
