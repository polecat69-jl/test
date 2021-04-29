import PokemonAPIservice from '../../shared/api/service/PokemonAPIservice'
import { useDebounce } from '../../hooks/useDebounce'
import { useState, useEffect } from 'react'

export const ShopView = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState('')
    const debounceSearchTerm = useDebounce(search, 1000)

    const fetchData = async (x) => {
        if (debounceSearchTerm) {
        const { data } = await PokemonAPIservice.searchCharacter(x)
        setData(data)
        }
    }

    useEffect(() => {
        fetchData(search)
    }, [debounceSearchTerm])

    return (
        <div>
        <input placeholder=' search 4 pokemons' onChange={event => setSearch(event.target.value)} />
        <h1>Name: {data?.name}</h1>
        <h1>id: {data?.id}</h1>
        <h1>height {data?.height}"</h1>
        <h1>weight {data?.weight}lb</h1>
        <h1>type {data?.types?.[0]?.type?.name}</h1>
        </div>
    )
}