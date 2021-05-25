import { useState, useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import E_COMMERCE_APIService from '../../shared/api/service/E_COMMERCE_APIService'

export const SignInView = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [newUser, setNewUser] = useState({ username: '', password: ''})

    const signIn = () => {
        setAuthenticatedUser(username, password)
        localStorage.setItem('username', username)
        localStorage.setItem('password', password);
        history.push(RoutingPath.homeView)
    }
   
    const register = async () => {
        try {
            const { data } = await E_COMMERCE_APIService.createUser(newUser)
        console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (event, target) => {
        setNewUser ({ ...newUser, [target]: event.target.value})
    }

    return (
        <div>
            <h1>Welcome user :)</h1>
            <span>Username: </span> <input onChange={event => setUsername(event.target.value)}/> <br /><br />
            <span>Password: </span> <input onChange={event => setPassword(event.target.value)}/> <br /><br />
            <button onClick={() => signIn()}>Sign In</button>
            <hr />
            <h1>Register new User</h1>
            <input placeholder='username' onChange={event => handleChange(event, 'username')}/>
            <input placeholder='password' type='password' onChange={event => handleChange(event, 'password')}/>
            <button onClick={() => register()}>Register new user</button>

        </div>
    )
}