import http from '../E_COMMERCE_API'

const getAllUsers = () => {
    return http.get('/user')
}

const getUserWithQuery = () => {
    return http.get('search/user')
}

const updateUser = () => {
    return http.put('/updateuser')
}

const deleteUserByID = () => {
    return http.del('/user')
}

const getUserByID = () => {
    return http.get('/user')
}

const createUser = (userdata) => {
    return http.post('/user', userdata)
}

export default {
    getAllUsers,
    createUser,
    getUserByID,
    deleteUserByID,
    updateUser,
    getUserWithQuery
}