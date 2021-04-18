import './DesktopNavigation.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import logotype from '../../../shared/images/logotype.png'
import RoutingPath from '../../../routes/RoutingPath'
import { Profile } from '../../../components/profile/Profile'


export const DesktopNavigation = () => {
    const [authenticatedUser, ] = useContext(UserContext)
    const history = useHistory()

    const displayAuthUserOrSignin = () => {
        return authenticatedUser
        ? <span className="authUserNavigation"> <Profile /> </span>
        : <span className='signinButton'onClick={() => history.push(RoutingPath.signinView)}>Sign In</span>
    }

    return (
        <div className='desktopNavigationWrapper'>
            <img className='navlogo' onClick={() => history.push(RoutingPath.homeView)} src={logotype} alt={'error..'}/>
            <span className='shopButton'onClick={() => history.push(RoutingPath.shopView)}>Shop</span>
            <span className='galleryButton'onClick={() => history.push(RoutingPath.galleryView)}>Gallery</span>
            <span className='newsButton'onClick={() => history.push(RoutingPath.newsView)}>News</span>
            {displayAuthUserOrSignin()}            
        </div>
    )
}