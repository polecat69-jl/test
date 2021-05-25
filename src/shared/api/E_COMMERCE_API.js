import Axios from 'axios'

const productionAPI = 'https://calm-reef-42496.herokuapp.com/'
const developmentAPI = 'http://localhost:3001'

const E_COMMERCE_API = Axios.create({
    baseURL: productionAPI
})

export default E_COMMERCE_API