import React from 'react'
import NavBar from '../features/navbar/NavBar'
import UserProfile from '../features/User/components/UserProfile'

const UserProfilePage = () => {
  return (
      <div>
          <NavBar>
          <div className='mx-auto text-2xl bg-gray-800 text-center text-white '> Your Profile</div>
              <UserProfile></UserProfile>
          </NavBar>
    </div>
  )
}

export default UserProfilePage