// 'use client'
// import { motion } from 'framer-motion'
// import { Code, Layout, ShoppingCart, Settings } from 'lucide-react'

// const services = [
//   {
//     title: 'Custom Websites',
//     description: 'Fully responsive websites using Next.js, Ts, and Tailwind CSS.',
//     icon: <Layout className="w-8 h-8 text-pink-500" />,
//   },
//   {
//     title: 'Admin Panels',
//     description: 'Dynamic dashboards using PHP, MySQL, or ASP.NET with full CRUD operations.',
//     icon: <Settings className="w-8 h-8 text-pink-500" />,
//   },
//   {
//     title: 'E-Commerce Stores',
//     description: 'Online stores with product listings, cart, and secure checkout.',
//     icon: <ShoppingCart className="w-8 h-8 text-pink-500" />,
//   },
//   {
//     title: 'Bug Fixes / Optimization',
//     description: 'Improve speed, fix layout issues, or debug frontend/backend code.',
//     icon: <Code className="w-8 h-8 text-pink-500" />,
//   },
// ]

// const ServicesSection = () => {
//   return (
//     <section id="services" className="py-16 px-4 md:px-20 text-white">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-bold text-center mb-10 text-pink-500"
//       >
//         Services I Offer
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: i * 0.1 }}
//             className="p-6 rounded-xl border border-white/10 hover:scale-105 transition-transform"
//           >
//             <div className="mb-4">{service.icon}</div>
//             <h3 className="text-lg font-semibold text-pink-400">{service.title}</h3>
//             <p className="text-sm text-gray-300 mt-2">{service.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default ServicesSection



//white background 
// 'use client'

// import { motion } from 'framer-motion'
// import { Code, Layout, ShoppingCart, Settings, Smartphone, Globe2, ShieldCheck } from 'lucide-react'
// import { useTheme } from 'next-themes'
// import Link from 'next/link'

// const services = [
//   {
//     title: 'Custom Websites',
//     description: 'Fully responsive websites using Next.js, React, and Tailwind CSS.',
//     icon: <Layout className="w-8 h-8 text-pink-500" />,
//   },
//   {
//     title: 'Admin Panels',
//     description: 'Dashboards using PHP, MySQL, or ASP.NET with full CRUD functionality.',
//     icon: <Settings className="w-8 h-8 text-pink-500" />,
//   },
//   {
//     title: 'E-Commerce Stores',
//     description: 'Shops with product listings, cart, and secure checkout.',
//     icon: <ShoppingCart className="w-8 h-8 text-pink-500" />,
//   },
//   {
//     title: 'Bug Fixes / Optimization',
//     description: 'Improve speed, fix layout issues, or debug frontend/backend code.',
//     icon: <Code className="w-8 h-8 text-pink-500" />,
//   },
//   {
//     title: 'Mobile Responsive Design',
//     description: 'Mobile-first UI development for all screen sizes.',
//     icon: <Smartphone className="w-8 h-8 text-pink-500" />,
//   },
//   {
//     title: 'Authentication Systems',
//     description: 'User login, roles, and secure admin areas.',
//     icon: <ShieldCheck className="w-8 h-8 text-pink-500" />,
//   },
// ]

// const ServicesSection = () => {
//   const { theme } = useTheme()

//   const isDark = theme === 'dark'

//   return (
//     <section id="services" className="py-16 px-4 md:px-20 transition-colors duration-300">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-bold text-center mb-10 text-pink-500"
//       >
//         Services I Offer
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: i * 0.1 }}
//             className={`p-6 rounded-xl border hover:scale-105 transition-transform 
//               ${isDark 
//                 ? 'bg-white/10 border-black/10 text-white' 
//                 : 'bg-gray-100 border-gray-200 text-gray-800'}
//             `}
//           >
//             <div className="mb-4">{service.icon}</div>
//             <h3 className="text-lg font-semibold text-pink-500">{service.title}</h3>
//             <p className="text-sm mt-2">{service.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* 🎯 Call to Action */}
//       <div className="mt-12 text-center">
//         <Link href="#contact">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-pink-500/30 transition duration-300"
//           >
//             Hire Me
//           </motion.button>
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default ServicesSection


'use client'

import { motion } from 'framer-motion'
import { Code, Layout, ShoppingCart, Settings, Smartphone, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Custom Websites',
    description: 'Fully responsive websites using Next.js, React, and Tailwind CSS.',
    icon: <Layout className="w-8 h-8 text-pink-500" />,
  },
  {
    title: 'Admin Panels',
    description: 'Dashboards using PHP, MySQL, or ASP.NET with full CRUD functionality.',
    icon: <Settings className="w-8 h-8 text-pink-500" />,
  },
  {
    title: 'E-Commerce Stores',
    description: 'Shops with product listings, cart, and secure checkout.',
    icon: <ShoppingCart className="w-8 h-8 text-pink-500" />,
  },
  {
    title: 'Bug Fixes / Optimization',
    description: 'Improve speed, fix layout issues, or debug frontend/backend code.',
    icon: <Code className="w-8 h-8 text-pink-500" />,
  },
  {
    title: 'Mobile Responsive Design',
    description: 'Mobile-first UI development for all screen sizes.',
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
  },
  {
    title: 'Authentication Systems',
    description: 'User login, roles, and secure admin areas.',
    icon: <ShieldCheck className="w-8 h-8 text-pink-500" />,
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-10 text-pink-500"
      >
        Services I Offer
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-white/10 text-white border border-white/10 hover:scale-105 transition-transform"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-pink-500">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 🎯 Call to Action */}
      <div className="mt-12 text-center">
        <Link href="#contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-pink-500/30 transition duration-300"
          >
            Hire Me
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

export default ServicesSection
