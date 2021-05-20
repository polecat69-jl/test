import http from '../PokemonAPI'


const searchCharacter = (pokemonName) => {
    return http.get(`/pokemon/${pokemonName}`)
}

const get100Pokemons = () => {
    return http.get('pokemon?limit=100')
}

export default {
    searchCharacter,
    get100Pokemons
}