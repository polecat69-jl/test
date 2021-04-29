import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { MobileNavigation}  from './mobilenavigation/MobileNavigation'
import { useWindowsDimensions } from '../../hooks/useWindowDimensions'
import { useEffect } from 'react'

export const Navigation = () => {
    const { width, } = useWindowsDimensions()

    const navigationViewPort = () => {
        return width <= 1000 ? <MobileNavigation /> : <DesktopNavigation />
    }

    return (
        <div>
            {navigationViewPort()}
        </div>
    )
}
