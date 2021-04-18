import './ProfileDropDown.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'

export const ProfileDropDown = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        setAuthenticatedUser(false)
        localStorage.removeItem('username')
        history.push(RoutingPath.homeView)
    }

    return (
        <div className='profileDropdownWrapper'>
            <span>Firstname Lastname</span><br />
            <span>Email</span>
            <hr />
            <span onClick={() => history.push(RoutingPath.profileView)}>Profile</span><br />
            <span onClick={() => history.push(RoutingPath.settingsView)}>Settings</span><br />
            <span>Language: SE</span><br />
            <span>Theme</span>
            <hr />
            <span onClick={() => history.push(RoutingPath.savedProductsView)}>Saved Products</span>
            <hr />
            <span onClick={() => logout()}>Logout</span>
        </div>
    )
}
