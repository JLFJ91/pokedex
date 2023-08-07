import BaseWithOutlet from '../pages/BaseWithOutlet'
import Home from '../pages/Home'
import Pokemons from '../pages/Pokemons'

export const PAGES_ROUTES = {
	home: '/',
	pokemons: '/pokedex/pokemons/'
}

export const BROWSER_ROUTER = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/pokedex',
		element: <BaseWithOutlet />,
		children: [
			{
				path: 'pokemons/:page?',
				element: <Pokemons />
			}
		]
	}
]
