import { PAGES_ROUTES } from '../config/routes'

import { Link } from 'react-router-dom'

import Base from './Base'
import Pokeball from '../components/Pokeball/Pokeball'

const Home: React.FC = () => {
	return (
		<Base>
			<div className="home">
				<Link to={PAGES_ROUTES.pokemons}>
					<Pokeball />
				</Link>
			</div>
		</Base>
	)
}

export default Home
