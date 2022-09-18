import React from 'react'
import Header from '../Header/Header'
import "./Profile.scss"

const Profile = () => {
    const ProfileContainer = () => {
        return(
            <div className='profile-container'>
                
            </div>
        )
    }
  return (
    <div className='profile'>
        <Header></Header>
        <ProfileContainer></ProfileContainer>
    </div>
  )
}

export default Profile