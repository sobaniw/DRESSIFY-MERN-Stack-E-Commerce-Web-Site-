import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 px-6 font-medium'>

      {/* Logo */}
      <p className='text-2xl font-bold tracking-widest text-black cursor-pointer'>
        DRESSIFY.
      </p>

      {/* Desktop Nav Links */}
      <ul className='hidden sm:flex gap-8 text-sm text-gray-700'>
        <NavLink to='/' className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-gray-600'}`
        }>
          <p>HOME</p>
        </NavLink>

        <NavLink to='/collection' className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-gray-600'}`
        }>
          <p>COLLECTION</p>
        </NavLink>

        <NavLink to='/about' className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-gray-600'}`
        }>
          <p>ABOUT</p>
        </NavLink>

        <NavLink to='/contact' className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-gray-600'}`
        }>
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* Right Side Icons */}
      <div className='flex items-center gap-6 relative'>

        <img src={assets.search_icon} alt="search" className='w-5 cursor-pointer' />

        {/* Profile with Dropdown */}
        <div className='relative'>
          <img
            src={assets.profile_icon}
            alt="profile"
            className='w-5 cursor-pointer'
            onClick={() => setProfileOpen(!profileOpen)}
          />

          {profileOpen && (
            <div className='absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-md text-sm z-50'>
              <NavLink
                to='/profile'
                className='block px-4 py-2 hover:bg-gray-100'
                onClick={() => setProfileOpen(false)}
              >
                My Profile
              </NavLink>

              <NavLink
                to='/orders'
                className='block px-4 py-2 hover:bg-gray-100'
                onClick={() => setProfileOpen(false)}
              >
                Orders
              </NavLink>

              <button
                className='w-full text-left px-4 py-2 hover:bg-gray-100'
                onClick={() => {
                  setProfileOpen(false)
                  console.log("Logout clicked")
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Cart */}
        <div className='relative'>
          <img src={assets.cart_icon} alt="cart" className='w-5 cursor-pointer' />
          <span className='absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
            3
          </span>
        </div>

        {/* Mobile Hamburger */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className='w-5 cursor-pointer sm:hidden'
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div
          className='flex items-center gap-2 p-4 cursor-pointer'
          onClick={() => setMenuOpen(false)}
        >
          <img src={assets.dropdown_icon} alt="back" className='w-4 rotate-180' />
          <p className='text-sm font-medium'>Back</p>
        </div>

        <ul className='flex flex-col text-sm text-gray-700'>
          <NavLink to='/' onClick={() => setMenuOpen(false)} className='py-3 px-6 border-b'>HOME</NavLink>
          <NavLink to='/collection' onClick={() => setMenuOpen(false)} className='py-3 px-6 border-b'>COLLECTION</NavLink>
          <NavLink to='/about' onClick={() => setMenuOpen(false)} className='py-3 px-6 border-b'>ABOUT</NavLink>
          <NavLink to='/contact' onClick={() => setMenuOpen(false)} className='py-3 px-6 border-b'>CONTACT</NavLink>
        </ul>
      </div>

    </div>
  )
}

export default Navbar