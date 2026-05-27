import React from 'react'
import { motion } from 'framer-motion'

// Type definitions
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
      whileHover={hover ? { y: -8, transition: { duration: 0.1 } } : {}}
      className={`glass-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card