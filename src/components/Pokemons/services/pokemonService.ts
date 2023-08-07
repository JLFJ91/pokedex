import { type PokeApiPokemonResponse, type PokeApiUrlsResponse, type Url, type PokemonWithId } from '../types'

import { POKEMON_ENDPOINTS } from '../config/endpoints'

import nullPokemonImg from '../assets/img/null-pokemon.webp'

export function parsePokeApiUrls (response: PokeApiUrlsResponse): Url[] {
	const urls = response.results.map(r => {
		return r.url
	})

	return urls
}

export function parsePokeApiPokemons (response: PokeApiPokemonResponse): PokemonWithId {
	const pokemon = {
		id: response.id,
		name: response.name,
		img: getPokemonImgFromPokeApi(response),
		types: response.types.map(t => {
			return {
				id: t.slot,
				name: t.type.name
			}
		})
	}

	return pokemon
}

export function getPokemonImgFromPokeApi (pokemon: PokeApiPokemonResponse): string {
	return (pokemon.sprites.other.home.front_default !== null)
		? pokemon.sprites.other.home.front_default
		: nullPokemonImg
}

export function getPokemonsUrls (page: number, limit: number): Promise<Url[]> {
	const offset = limit * (page - 1)
	const endpoint = `${POKEMON_ENDPOINTS.base}?limit=${limit}&offset=${offset}`

	return fetch(endpoint)
		.then(res => res.json())
		.then(data => parsePokeApiUrls(data))
}

export function getPokemon (url: Url): Promise<PokemonWithId> {
	return fetch(url)
		.then(res => res.json())
		.then(data => parsePokeApiPokemons(data))
}

export function getPokemons (urls: Url[]): Promise<PokemonWithId[]> {
	const pokePromises = urls.map(u => {
		return getPokemon(u)
	})

	return Promise.all(pokePromises)
		.then(data => data)
		.catch((e) => {
			console.log(e)
			return []
		})
}

export function getMaxNumberOfPokemons (): Promise<number> {
	const endpoint = POKEMON_ENDPOINTS.base

	return fetch(endpoint)
		.then(res => res.json())
		.then(data => data.count)
}
