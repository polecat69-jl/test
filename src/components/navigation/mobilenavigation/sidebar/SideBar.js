import './SideBar.css'

import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../../shared/provider/UserProvider'
import logotype from '../../../../shared/images/logotype.png'
import logoutimg from '../../../../shared/images/logout.png'
import settingsimg from '../../../../shared/images/settings.png'
import savedproductsimg from '../../../../shared/images/savedproducts.png'
import profileimg from '../../../../shared/images/userprofile.png'

export const SideBar = ({drawerisOpen, drawerHandler}) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        setAuthenticatedUser(false)
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        history.push(RoutingPath.signinView)
    }

    return (
        <nav className={drawerisOpen ? 'side-drawer open' : 'side-drawer'}>
            <span onClick={() => drawerHandler(false)}>Exit</span><br />

            <img className='navlogo' onClick={() => history.push(RoutingPath.homeView)} src={logotype} alt={'error..'}/><br />
            <span className='shopButton'onClick={() => history.push(RoutingPath.shopView)}>Shop</span><br />
            <span className='galleryButton'onClick={() => history.push(RoutingPath.galleryView)}>Gallery</span><br />
            <span className='newsButton'onClick={() => history.push(RoutingPath.newsView)}>News</span><br />

            <hr />
            <hr />

            <span>First Lastname</span><br />
            <span>Email</span>
            <hr />
            <span onClick={() => history.push(RoutingPath.profileView)}><img className="profileDropDownImages" src={profileimg} alt={'error..'}/> Profile</span><br />
            <span onClick={() => history.push(RoutingPath.settingsView)}><img className="profileDropDownImages" src={settingsimg} alt={'error..'}/> Settings</span><br />
            <span>Language: SE</span><br />
            <span>Theme</span>
            <hr />
            <span onClick={() => history.push(RoutingPath.savedProductsView)}><img className="profileDropDownImages" src={savedproductsimg} alt={'error..'}/> Saved Products</span>
            <hr />
            <span onClick={() => logout()}><img className="profileDropDownImages" src={logoutimg} alt={'error..'}/> Logout</span>
 
        </nav>
    )
}
