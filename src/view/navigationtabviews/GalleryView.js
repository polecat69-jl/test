import {useState} from 'react'
import StarWarsAPIservice from '../../shared/api/service/StarWarsAPIService'

export const GalleryView = () => {
    const [data, setData] = useState()
    const [characterID, setcharacterID] =useState()

    const fetchData = async () => {

        try {
            const response = await StarWarsAPIservice.getStarWarsCharacter(characterID)
            setData(response.data)
        } catch (error) {
            console.log('error occured: ', error)
        } 
    }

    const username = localStorage.getItem('username')

    return (
        <div>
            <h1>Hi and welcome {username}:) browse our gallery of StarWars</h1>
            <button onClick={() => fetchData()}>Make API</button>
            <button onClick={() => console.log(data)}>Check my state</button>
            <input placeholder='Search for Character with ID number'
                onChange ={event => setcharacterID(event.target.value)}/>
            <h1>{data?.name}</h1>
            <p>Gender: {data?.gender}</p>
            <p>Height: {data?.height} cm</p>
            <p>Weight: {data?.mass} kg</p>
            <p>Haircolor: {data?.hair_color}</p>


        </div>
    )
}

    /*const fetchData = () => {
        Axios.get('https://swapi.dev/api/people/1/')
        .then(response => { console.log(response)})
        .catch(error => { console.log(error) })
    }*/