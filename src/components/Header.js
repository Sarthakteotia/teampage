import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-evenly hover:cursor-pointer bg-green-300 shadow-md'>
        <div>
        <img className="h-12" alt='logo' src='https://www.sciastra.com/Assets/Images/newsciastra.jpg' />
        </div>
        <div className='hover:text-blue-800'>Home</div>
        <div className='hover:text-blue-800'>Courses</div>
        <div className='hover:text-blue-800'>Selections</div>
        <div className='hover:text-blue-800'>Blog</div>
        <div className='hover:text-blue-800'>Materials</div>
        <div className='hover:text-blue-800'>Team</div>
        <div className='hover:text-blue-800'>Contact Us</div>
        
    </div>
  )
}

export default Header;