import {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Axios from 'axios'
import loadingGif from '../../shared/images/pokeball.gif'

export const ItemDetail = () => {
    const [APIData, setAPIData] = useState()
    const [loading, setLoading] = useState(true)
    const location = useLocation()

    const fetchData = async () => {
        try {
            const { data } = await Axios.get(location.state.url)
            setAPIData(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const displayData = () => {
        if(!loading) {
            return (
                <>
                    <button onClick={() => console.log(APIData)}>Show location</button><hr></hr>
                    <img src={APIData?.sprites?.front_default} alt={'error'} />
                    <h1>name: {APIData?.name}</h1>
                    <p>Gender: {APIData?.gender}</p>
                    <p>Height: {APIData?.height} cm</p>
                    <p>Haircolor: {APIData?.hair_color}</p>
                </>
            )  
        }

    }

    useEffect(() => {
        fetchData()
    })

    return (
        loading ? <img src={loadingGif} /> :
        <div>
            {displayData()}
        </div>
    )
}