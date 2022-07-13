import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const handleNav = () => {
    setShowMobileNav((prev) => !prev)
  }


  return (
    <div>
    
      <div className='hidden md:flex w-full justify-between items-center text-center text-lg font-accent my-2 px-2 bg-black'>
      {/*  */}
      {/* Regular Nav */}
        <div className='flex w-[70%] justify-between px-2 py-2 bg-red'>
          <Link className='cursor-pointer m-0' to={'/'}>Home</Link>
          <Link className='cursor-pointer m-0' to={'/artists/'}>Artists</Link>
          <Link className='cursor-pointer m-0' to={'/galleries/'}>Galleries</Link>
          <Link className='cursor-pointer m-0' to={'/shop/'}>Shop</Link>
        </div>
      {/* User Info */}
        <div>
          <Link to={'/login'}><p className='cursor-pointer'>LogIn</p></Link>
        </div>

      </div>
{/* Mobile */}
      <div className='md:hidden '>
        {/* Menue toggle */}
        <div className='md:hidden absolute z-10 mt-4 left-[90%]' onClick={handleNav}>
          {
            !showMobileNav ? (
              <HiOutlineMenuAlt4 className='text-white z-10 font-bold' size={40} />
            ) : <AiOutlineClose className='text-white z-10 font-bold' size={40}/>
          }

        </div>
        {/* Menu */}
        <div className={showMobileNav ? 'absolute z-10 top-[20%] mr-4 text-black w-full text-5xl pl-3 bg-gray-400/80' : 'absolute left-[100%]'}>
            <Link className='cursor-pointer my-auto w-full h-full hover:text-purple' to={'/'}><p className='border-b cursor-pointer'>Home</p></Link>
            <Link className='cursor-pointer my-auto w-full h-full hover:text-purple' to={'/artists'}><p className='border-b cursor-pointer'>Artists</p></Link>
            <Link className='cursor-pointer my-auto w-full h-full hover:text-purple' to={'/galleries'}><p className='border-b cursor-pointer'>Galleries</p></Link>
            <Link className='cursor-pointer my-auto w-full h-full hover:text-purple' to={'/shop'}><p className='border-b cursor-pointer'>Shop</p></Link>
        </div>
      </div>

    </div>
  )
}

export default Header