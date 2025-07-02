'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 shadow-inner px-6 md:px-16 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-4">

        {/* Brand & Copyright */}
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-pink-500 font-semibold">Amna.dev</span>. All rights reserved.
        </span>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a href="#about" className="hover:text-pink-500 transition-colors duration-300">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500 transition-colors duration-300">Privacy Policy</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-500 transition-colors duration-300">Contact</a>
          </li>
        </ul>

      </div>
    </footer>
  )
}

export default Footer
