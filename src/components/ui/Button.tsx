import React from 'react'
import { motion } from 'framer-motion'

// Type definitions
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const variants = {
    primary: 'gradient-btn',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl hover:scale-105',
    outline: 'bg-transparent text-gray-800 border-2 border-gray-300 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button