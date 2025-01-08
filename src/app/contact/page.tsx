import React from 'react'
import AccountDetails from './accountDetails'
import Address from './address'

const page = () => {
  return (
    <div className='bg-gray-200'>
      <Address/>
      <AccountDetails/>
    </div>
  )
}

export default page
