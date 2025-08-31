import React from 'react'

const AdminHeader = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Admin 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded-s-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}


export default AdminHeader