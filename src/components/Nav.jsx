import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSignIn = () => setShowSignIn(!showSignIn);

  return (
    <>
      {/* Navigation Header */}
      <header className='sticky top-0 bg-white shadow-md z-50 padding-x py-6'>
        <nav className='flex justify-between items-center max-w-screen-xl mx-auto'>
          <a href="/">
            <img src={headerLogo} alt="logo" className="w-32 h-auto" />
          </a>

          <div className='lg:hidden flex gap-4 items-center'>
            <button
              onClick={toggleSignIn}
              className='text-sm font-semibold bg-coral-blue text-white py-1.5 px-4 rounded-lg shadow-md hover:bg-blue-700 transition'
            >
              Sign In
            </button>
            <img
              src={hamburger}
              alt="menu"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <div className='hidden lg:flex items-center space-x-8'>
            <ul className="flex space-x-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className='text-lg text-gray-700 font-semibold hover:text-blue-600'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleSignIn}
              className='ml-6 text-sm font-semibold bg-coral-blue text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition'
            >
              Sign In
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden absolute top-16 z-10 right-4 mt-2 p-4 bg-white border shadow-md rounded-md">
              <ul className="space-y-4">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className='text-lg text-gray-700 font-semibold hover:text-blue-600'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Sign-In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
          <div className="relative bg-white w-full max-w-2xl rounded-xl p-10 shadow-2xl">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-gray-800"
              onClick={toggleSignIn}
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back!</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-600 mb-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral-blue" />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral-blue" />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Phone Number</label>
                <input type="tel" placeholder="+91 9876543210" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral-blue" />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Password</label>
                <input type="password" placeholder="••••••••" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral-blue" />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </div>
              <button type="submit" className="w-full bg-coral-blue text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Sign In
              </button>
              <p className="text-sm text-center text-gray-600">
                Don't have an account? <a href="#" className="text-blue-600 hover:underline">Register</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
