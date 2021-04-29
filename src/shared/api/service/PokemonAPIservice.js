import http from '../PokemonAPI'


const searchCharacter = (pokemonName) => {
    return http.get(`/pokemon/${pokemonName}`)
}

export default {
    searchCharacter
}