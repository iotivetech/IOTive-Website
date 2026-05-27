import React from 'react'
import { motion } from 'framer-motion'
import Card from '../ui/Card'

// Type definitions
interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  delay?: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="text-center h-full">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg"
        >
          <Icon className="text-3xl text-white" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  )
}

export default ServiceCard