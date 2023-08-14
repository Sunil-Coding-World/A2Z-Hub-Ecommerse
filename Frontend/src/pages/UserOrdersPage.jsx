import React from 'react'
import NavBar from '../features/navbar/NavBar'
import UserOrders from '../features/User/components/UserOrder'

const UserOrdersPage = () => {
  return (
      <div>
          <NavBar>
              <div className='mx-auto text-2xl bg-gray-800 text-center text-white '> Your Orders</div>
              <UserOrders></UserOrders>
          </NavBar>
    </div>
  )
}

export default UserOrdersPage;