export type PokemonId = number
export type PokemonTypeId = number

export interface Pokemon {
	name: string
	img: string
	types: PokemonType[]
}

export interface PokemonWithId extends Pokemon {
	id: PokemonId
}

export interface PokemonType {
	id: PokemonTypeId
	name: string
}

export type Url = string

export interface PokeApiUrlResult {
	name: string
	url: Url
}

export interface PokeApiUrlsResponse {
	count: number
	next: string
	previous: string
	results: PokeApiUrlResult[]
}

export interface PokeApiPokemonResponse {
	id: number
	name: string
	sprites: {
		other: {
			home: {
				front_default: string | null
			}
		}
	}
	types: Array<{
		slot: number
		type: {
			name: string
		}
	}>
}
