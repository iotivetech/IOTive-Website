import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

// Type definitions
interface QuickLink {
  name: string
  path: string
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>  // ✅ Fixed: Added className prop
  url: string
  label: string
}

const Footer: React.FC = () => {
  const quickLinks: QuickLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks: SocialLink[] = [
    { icon: FaInstagram, url: 'https://www.instagram.com/iotive.official', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <img
                src="/IOTiveSolutionsLLP.png"
                alt="IOTive Solutions LLP Logo"
                className="h-16 w-auto object-contain select-none"
              />
            </motion.div>
            <p className="text-gray-300 mb-6 max-w-md">
              Turning Ideas into Innovation. We specialize in IoT, PCB design, and custom electronics solutions for students, startups, and makers.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="mr-2 text-blue-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="mr-2 text-blue-400" />
                <a href="mailto:iotivetech@gmail.com" className="hover:text-blue-400 transition-colors">
                  iotivetech@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} IOTive. All rights reserved. | Empowering Innovation
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer