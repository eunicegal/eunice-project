// import React from 'react'
import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';     
import { useContext } from 'react';


const Navbar = () => {
  
  const [visible, setVisible] = useState(false);
  const {getCartCount} = useContext(ShopContext)
  
  return (
    <div className="flex items-center justify-between py-5 font-medium bg-white relative z-50"> {/* Added z-index and bg-white */}
      <Link to="/"><img src={assets.logo} className="w-36" alt="Logo" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />
        <div className="group relative">
         <Link to='/login'> <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50"> {/* Added z-index */}
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">my profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Log out</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" /> 
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="Menu" />
      </div>

      {/* sidebar menu for mobile screen */}
      <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visible ? 'w-full' : 'w-0'}`}> {/* Changed to fixed and added z-index */}
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">About</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;