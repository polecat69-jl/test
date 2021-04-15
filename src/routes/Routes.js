import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { GalleryView } from '../view/navigationtabviews/GalleryView'
import { LoginView } from '../view/navigationtabviews/LoginView'
import { NewsView } from '../view/navigationtabviews/NewsView'
import { ShopView } from '../view/navigationtabviews/ShopView'
import RoutingPath from './RoutingPath'

export const Routes = ({children}) => {

    return (
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={RoutingPath.galleryView} component={GalleryView} />
                <Route exact path={RoutingPath.loginView} component={LoginView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}
