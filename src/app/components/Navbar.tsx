// 'use client'

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Menu, X } from 'lucide-react' // Icons

// const navItems = [
//   { label: 'About Us', href: '#about' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Contact Us', href: '#contact' },
// ]

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-md shadow-md">
//       <nav className="flex items-center justify-between px-6 md:px-20 py-4 text-white relative">
//         {/* 🔆 Logo */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-pink-500 font-bold text-2xl tracking-wide"
//         >
//           Amna.dev
//         </motion.div>

//         {/* 🌐 Desktop Nav */}
//         <motion.ul
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="hidden md:flex gap-10 text-sm font-medium tracking-wide"
//         >
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <a
//                 href={item.href}
//                 className="relative group transition-all duration-300 hover:text-pink-400"
//               >
//                 {item.label}
//                 <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-400 transition-all duration-300 group-hover:w-full" />
//               </a>
//             </li>
//           ))}
//         </motion.ul>

//         {/* 🍔 Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white focus:outline-none"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* 📱 Mobile Menu */}
//         {menuOpen && (
//           <motion.ul
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="absolute top-16 left-0 w-full bg-black/90 text-center py-6 flex flex-col gap-4 md:hidden"
//           >
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="block text-white hover:text-pink-400 transition"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </nav>
//     </header>
//   )
// }

// export default Navbar




//is me, mode changed horha hai

// 'use client'

// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { Moon, Sun } from 'lucide-react'
// import Link from 'next/link'

// const navItems = [
//   { label: 'About Us', href: '#about' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Contact Us', href: '#contact' },
// ]

// type Section = {
//   label: string
//   href: string
//   top: number
// }

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(true)
//   const [active, setActive] = useState<string>('')
//   const [sectionTops, setSectionTops] = useState<Section[]>([])
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY + 150
//       const current = sectionTops.findLast(sec => scrollY >= sec.top)
//       if (current?.label) setActive(current.label)
//     }

//     const tops = navItems.map(item => {
//       const el = document.querySelector(item.href)
//       return {
//         label: item.label,
//         href: item.href,
//         top: el ? (el as HTMLElement).offsetTop : 0,
//       }
//     })

//     setSectionTops(tops)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${darkMode ? 'bg-black/100 text-white' : 'bg-white/80 text-black'} backdrop-blur-md`}>
//       <nav className="flex items-center justify-between px-6 md:px-20 py-4">
//         {/* 🔆 Logo */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-pink-500 font-bold text-2xl tracking-wide"
//         >
//           Amna.dev
//         </motion.div>

//         {/* 🌙/☀️ Toggle */}
//         <button
//           onClick={() => setDarkMode(prev => !prev)}
//           className="text-xl"
//         >
//           {darkMode ? <Moon /> : <Sun />}
//         </button>

//         {/* 🔗 Desktop Navigation */}
//         <motion.ul
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="hidden md:flex gap-10 text-sm font-medium tracking-wide"
//         >
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 href={item.href}
//                 className={`relative group px-2 py-1 transition-all duration-300 ${
//                   active === item.label ? 'text-pink-400 scale-105' : ''
//                 }`}
//               >
//                 {item.label}
//                 <span className={`absolute left-0 -bottom-1 h-0.5 bg-pink-400 transition-all duration-300 ${
//                   active === item.label ? 'w-full' : 'w-0 group-hover:w-full'
//                 }`} />
//               </Link>
//             </li>
//           ))}
//         </motion.ul>

//         {/* 📱 Hamburger Icon */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15" />
//           </svg>
//         </button>
//       </nav>

//       {/* 📱 Mobile Menu */}
//       {menuOpen && (
//         <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden">
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`block py-1 transition duration-300 ${
//                   active === item.label ? 'text-pink-400' : ''
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   )
// }

// export default Navbar


// 'use client'

// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { Moon, Sun } from 'lucide-react'
// import Link from 'next/link'

// const navItems = [
//   { label: 'About Us', href: '#about' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Contact Us', href: '#contact' },
// ]

// type Section = {
//   label: string
//   href: string
//   top: number
// }

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(true)
//   const [active, setActive] = useState<string>('')
//   const [sectionTops, setSectionTops] = useState<Section[]>([])
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY + 150
//       const current = sectionTops.findLast(sec => scrollY >= sec.top)
//       if (current?.label) setActive(current.label)
//     }

//     const tops = navItems.map(item => {
//       const el = document.querySelector(item.href)
//       return {
//         label: item.label,
//         href: item.href,
//         top: el ? (el as HTMLElement).offsetTop : 0,
//       }
//     })

//     setSectionTops(tops)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${darkMode ? 'bg-black/100 text-white' : 'bg-white/80 text-black'} backdrop-blur-md`}>
//       <nav className="flex items-center justify-between px-6 md:px-20 py-4">
//         {/* Logo */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-pink-500 font-bold text-2xl tracking-wide"
//         >
//           Amna.dev
//         </motion.div>

//         {/* Desktop Navigation */}
//         <motion.ul
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="hidden md:flex gap-10 text-sm font-medium tracking-wide"
//         >
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 href={item.href}
//                 className={`relative group px-2 py-1 transition-all duration-300 ease-in-out 
//                   ${active === item.label ? 'text-pink-400 scale-105' : 'hover:text-pink-400'}
//                 `}
//               >
//                 <span className="relative z-10">{item.label}</span>
//                 <span
//                   className={`absolute left-0 -bottom-0.5 h-0.5 bg-pink-400 transition-all duration-300 ease-in-out 
//                     ${active === item.label ? 'w-full' : 'w-0 group-hover:w-full'}
//                   `}
//                 />
//               </Link>
//             </li>
//           ))}
//         </motion.ul>


//         {/* Mobile  Hamburger + Dark Mode */}
// <div className="flex items-center gap-4 md:hidden">
//   <button
//     onClick={() => setDarkMode(prev => !prev)}
//     className="text-xl"
//   >
//     {darkMode ? <Moon /> : <Sun />}
//   </button>

//   <button onClick={() => setMenuOpen(!menuOpen)}>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15" />
//     </svg>
//   </button>
// </div>
//       </nav>

  
//       {/* 📱 Mobile Menu */}
// {menuOpen && (
//   <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden">
//     {navItems.map((item, index) => (
//       <li key={index}>
//         <Link
//   href={item.href}
//   onClick={() => setMenuOpen(false)}
//   className={`relative group px-2 py-1 inline-block transition-all duration-300 ease-in-out
//     ${active === item.label ? 'text-pink-400 scale-105' : 'hover:text-pink-400'}
//   `}
// >
//   <span className="relative z-10">{item.label}</span>
//   <span
//     className={`absolute left-0 right-0 bottom-0 h-0.5 bg-pink-400 mx-auto transition-all duration-300 ease-in-out
//       ${active === item.label ? 'w-full' : 'w-0 group-hover:w-full'}
//     `}
//     style={{ margin: '0 auto' }}
//   />
// </Link>

//       </li>
//     ))}
//   </ul>
// )}

//     </header>
//   )
// }

// export default Navbar




//new 
// 'use client'

// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { Moon, Sun } from 'lucide-react'
// import Link from 'next/link'

// const navItems = [
//   { label: 'Home', href: '#hero' },
//   { label: 'About Us', href: '#about' },
//   { label: 'Projects', href: '/Projects' },
//   { label: 'Contact Us', href: '#contact' },
// ]

// type Section = {
//   label: string
//   href: string
//   top: number
// }

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(true)
//   const [active, setActive] = useState<string>('')
//   const [sectionTops, setSectionTops] = useState<Section[]>([])
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   // Highlight active nav item
//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const scrollY = window.scrollY + 150
//   //     const current = sectionTops.findLast(sec => scrollY >= sec.top)
//   //     if (current?.label) setActive(current.label)

//   //     setScrolled(window.scrollY > 10)
//   //   }

//   //   const tops = navItems.map(item => {
//   //     const el = document.querySelector(item.href)
//   //     return {
//   //       label: item.label,
//   //       href: item.href,
//   //       top: el ? (el as HTMLElement).offsetTop : 0,
//   //     }
//   //   })

//   //   setSectionTops(tops)
//   //   window.addEventListener('scroll', handleScroll)
//   //   return () => window.removeEventListener('scroll', handleScroll)
//   // }, [])

//   useEffect(() => {
//   const handleScroll = () => {
//     const scrollY = window.scrollY + 150
//     const current = sectionTops.findLast(sec => scrollY >= sec.top)
//     if (current?.label) setActive(current.label)
//     setScrolled(window.scrollY > 10)
//   }

//   // Only for section anchors starting with '#'
//   const tops = navItems
//     .filter(item => item.href.startsWith('#'))
//     .map(item => {
//       const el = document.querySelector(item.href)
//       return {
//         label: item.label,
//         href: item.href,
//         top: el ? (el as HTMLElement).offsetTop : 0,
//       }
//     })

//   setSectionTops(tops)
//   window.addEventListener('scroll', handleScroll)
//   return () => window.removeEventListener('scroll', handleScroll)
// }, [])

//   return (
//     <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
//       darkMode ? 'text-white' : 'text-black'
//     } ${scrolled ? 'shadow-md' : ''} ${darkMode ? 'bg-black/100' : 'bg-white/80'}`}>
//       <nav className="flex items-center justify-between px-6 md:px-20 py-4">
//         {/* 🔗 Logo as Home link */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Link
//             href="/"
//             className="text-pink-500 font-bold text-2xl tracking-wide"
//             aria-label="Go to homepage"
//           >
//             Amna.dev
//           </Link>
//         </motion.div>

//         {/* 🖥️ Desktop Navigation */}
//         <motion.ul
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="hidden md:flex gap-10 text-sm font-medium tracking-wide"
//         >
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 href={item.href}
//                 className={`relative group px-2 py-1 transition-all duration-300 ease-in-out 
//                   ${active === item.label ? 'text-pink-400 scale-105' : 'hover:text-pink-400'}
//                 `}
//               >
//                 <span className="relative z-10">{item.label}</span>
//                 <span
//                   className={`absolute left-0 -bottom-0.5 h-0.5 bg-pink-400 transition-all duration-300 ease-in-out 
//                     ${active === item.label ? 'w-full' : 'w-0 group-hover:w-full'}
//                   `}
//                 />
//               </Link>
//             </li>
//           ))}
//         </motion.ul>

//         {/* 📱 Mobile Icons */}
//         <div className="flex items-center gap-4 md:hidden">
//           <button
//             onClick={() => setDarkMode(prev => !prev)}
//             aria-label="Toggle Dark Mode"
//             className="text-xl"
//           >
//             {darkMode ? <Moon /> : <Sun />}
//           </button>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
//               />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* 📱 Mobile Menu */}
//       {menuOpen && (
//         <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden">
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`relative group px-2 py-1 inline-block transition-all duration-300 ease-in-out
//                   ${active === item.label ? 'text-pink-400 scale-105' : 'hover:text-pink-400'}
//                 `}
//               >
//                 <span className="relative z-10">{item.label}</span>
//                 <span
//                   className={`absolute left-0 right-0 bottom-0 h-0.5 bg-pink-400 mx-auto transition-all duration-300 ease-in-out
//                     ${active === item.label ? 'w-full' : 'w-0 group-hover:w-full'}
//                   `}
//                   style={{ margin: '0 auto' }}
//                 />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   )
// }

// export default Navbar



'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '#hero', type: 'section' },
  { label: 'About Us', href: '#about', type: 'section' },
  { label: 'Projects', href: '#projects', type: 'route' },
  { label: 'Contact Us', href: '#contact', type: 'section' },
]

type Section = {
  label: string
  href: string
  top: number
}

const Navbar = () => {
  const pathname = usePathname()
  const [darkMode, setDarkMode] = useState(true)
  const [active, setActive] = useState<string>('')
  const [sectionTops, setSectionTops] = useState<Section[]>([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150
      const current = sectionTops.findLast(sec => scrollY >= sec.top)
      if (current?.label) setActive(current.label)
      setScrolled(window.scrollY > 10)
    }

    const tops = navItems
      .filter(item => item.type === 'section')
      .map(item => {
        const el = document.querySelector(item.href)
        return {
          label: item.label,
          href: item.href,
          top: el ? (el as HTMLElement).offsetTop : 0,
        }
      })

    setSectionTops(tops)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
      darkMode ? 'text-white' : 'text-black'
    } ${scrolled ? 'shadow-md' : ''} ${darkMode ? 'bg-black/100' : 'bg-white/80'}`}>
      <nav className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* 🔗 Logo */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="text-pink-500 font-bold text-2xl tracking-wide"
            aria-label="Go to homepage"
          >
            Amna.dev
          </Link>
        </motion.div>

        {/* 🖥️ Desktop Nav */}
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:flex gap-10 text-sm font-medium tracking-wide"
        >
          {navItems.map((item, index) => {
            const isActive = item.type === 'section'
              ? active === item.label
              : pathname === item.href

            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`relative group px-2 py-1 transition-all duration-300 ease-in-out 
                    ${isActive ? 'text-pink-400 scale-105' : 'hover:text-pink-400'}
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-pink-400 transition-all duration-300 ease-in-out 
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </Link>
              </li>
            )
          })}
        </motion.ul>

        {/* 📱 Mobile Icons */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode(prev => !prev)}
            aria-label="Toggle Dark Mode"
            className="text-xl"
          >
            {darkMode ? <Moon /> : <Sun />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden">
          {navItems.map((item, index) => {
            const isActive = item.type === 'section'
              ? active === item.label
              : pathname === item.href

            return (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative group px-2 py-1 inline-block transition-all duration-300 ease-in-out
                    ${isActive ? 'text-pink-400 scale-105' : 'hover:text-pink-400'}
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-0.5 bg-pink-400 mx-auto transition-all duration-300 ease-in-out
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                    style={{ margin: '0 auto' }}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}

export default Navbar
