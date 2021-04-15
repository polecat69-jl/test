import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import logotype from '../../../shared/images/logotype.png'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
    const history = useHistory()

    return (
        <div className='desktopNavigationWrapper'>
            <img className='navlogo' onClick={() => history.push(RoutingPath.homeView)} src={logotype} alt={'error..'}/>
            <span className='shopButton'onClick={() => history.push(RoutingPath.shopView)}>Shop</span>
            <span className='galleryButton'onClick={() => history.push(RoutingPath.galleryView)}>Gallery</span>
            <span className='newsButton'onClick={() => history.push(RoutingPath.newsView)}>News</span>
            <span className='loginButton'onClick={() => history.push(RoutingPath.loginView)}>Login</span>
        </div>
    )
}
