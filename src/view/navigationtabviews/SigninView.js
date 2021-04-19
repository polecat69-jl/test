import { useState, useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const SignInView = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const signIn = () => {
        setAuthenticatedUser(username, password)
        localStorage.setItem('username', username)
        localStorage.setItem('password', password);
        history.push(RoutingPath.homeView)
    }
   
    return (
        <div>
            <h1>Welcome user :)</h1>
            <span>Username: </span> <input onChange={event => setUsername(event.target.value)}/> <br /><br />
            <span>Password: </span> <input onChange={event => setPassword(event.target.value)}/> <br /><br />
            <button onClick={() => signIn()}>Sign In</button>
        </div>
    )
}