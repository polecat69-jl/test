import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'
import {ProfileDropDown} from './profiledropdown/ProfileDropDown'


export const Profile = () => {
    const [authenticatedUser, ] = useContext(UserContext)


    return (
        <div className='profileWrapper'>
            <span>{authenticatedUser}</span><br />
            <img className='profileImg' src={'https://thispersondoesnotexist.com/image' } alt={'error...'} />
            <ProfileDropDown />       
        </div>
    )
}
