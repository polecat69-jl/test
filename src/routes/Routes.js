import React, {useContext, useEffect} from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { GalleryView } from '../view/navigationtabviews/GalleryView'
import { SignInView } from '../view/navigationtabviews/SigninView'
import { NewsView } from '../view/navigationtabviews/NewsView'
import { ShopView } from '../view/navigationtabviews/ShopView'
import { SettingsView } from '../view/profiledropdownviews/SettingsView'
import { ProfileView } from '../view/profiledropdownviews/ProfileView'
import { SaveProductsView } from '../view/profiledropdownviews/SaveProductsView'
import { ItemDetail } from '../view/profiledropdownviews/ItemDetail'
import RoutingPath from './RoutingPath'



export const Routes = ({children}) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated) => {
        return authenticatedUser ? HomeView : navigateToViewIfAuthenticated
    }

    const authenticatedRequired = (navigateToViewIfAuthenticated) => {
        return authenticatedUser ? navigateToViewIfAuthenticated : SignInView
    }

    const checkIfUserIsAuthenticated = () => {
        const getLocalStorage = localStorage.getItem('username')
        if(getLocalStorage){
            setAuthenticatedUser(getLocalStorage)
        }
    }

    useEffect(() => {
        checkIfUserIsAuthenticated()
    })

    return (
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={RoutingPath.galleryView} component={GalleryView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />                
                <Route exact path={RoutingPath.itemDetailView} component={ItemDetail} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />                
                <Route exact path={RoutingPath.signinView} component={blockRouteIfAuthenticated(SignInView)} />                                
                <Route exact path={RoutingPath.settingsView} component={authenticatedRequired(SettingsView)} />
                <Route exact path={RoutingPath.profileView} component={authenticatedRequired(ProfileView)} />                                
                <Route exact path={RoutingPath.savedProductsView} component={authenticatedRequired(SaveProductsView)} />
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}