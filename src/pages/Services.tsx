import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/common/SEO'
import ServiceCard from '../components/common/ServiceCard'
import Button from '../components/ui/Button'
import {
  FaLaptopCode,
  FaGraduationCap 
} from 'react-icons/fa'

import { 
  GiCircuitry,
  GiCrossroad  
} from 'react-icons/gi'

import {HiChip} from 'react-icons/hi'
import {BiCloudUpload} from 'react-icons/bi'

// Type definitions
interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface Feature {
  title: string
  description: string
}

interface ProcessStep {
  step: string
  title: string
  description: string
}

const Services: React.FC = () => {
  const navigate = useNavigate()

  const services: Service[] = [
    {
      icon: GiCrossroad,
      title: 'Project Assistance',
      description: 'Comprehensive support for your electronics projects from initial concept to final implementation. Our experienced team guides you through every step, ensuring your vision becomes reality with technical excellence and creative problem-solving.'
    },
    {
      icon: HiChip,
      title: 'PCB Design & Fabrication',
      description: 'Professional PCB design services using industry-standard tools. We handle everything from schematic capture to board layout, fabrication, and assembly. Multi-layer boards, high-frequency designs, and complex routing - we do it all with precision.'
    },
    {
      icon: BiCloudUpload,
      title: 'IoT & Embedded Kits',
      description: 'Ready-to-use development kits and modules designed for rapid prototyping and learning. Perfect for students, hobbyists, and professionals looking to quickly bring their IoT ideas to life without starting from scratch.'
    },
    {
      icon: GiCircuitry,
      title: 'Custom Circuit Development',
      description: 'Tailored electronic circuit solutions designed specifically for your unique requirements. From power management to sensor integration, we create custom circuits that perfectly match your project specifications and performance needs.'
    },
    {
      icon: FaLaptopCode,
      title: 'Coding & Debugging Support',
      description: 'Expert assistance with firmware development, code optimization, and debugging for embedded systems. We work with various microcontrollers and platforms, helping you overcome technical challenges and improve code efficiency.'
    },
    {
      icon: FaGraduationCap,
      title: 'Workshops & Training Sessions',
      description: 'Hands-on workshops and comprehensive training programs covering IoT, embedded systems, PCB design, and more. Interactive sessions designed to enhance your technical skills and practical knowledge in electronics and programming.'
    }
  ]

  const features: Feature[] = [
    { title: 'Expert Team', description: '3+ years combined experience' },
    { title: 'Quick Turnaround', description: 'Fast project completion times' },
    { title: 'Quality Assured', description: 'Rigorous testing standards' },
    { title: 'Affordable Pricing', description: 'Competitive rates for all services' }
  ]

  const processSteps: ProcessStep[] = [
    { step: '01', title: 'Consultation', description: 'Discuss your project requirements and goals' },
    { step: '02', title: 'Planning', description: 'Create detailed project roadmap and timeline' },
    { step: '03', title: 'Development', description: 'Execute the project with regular updates' },
    { step: '04', title: 'Delivery', description: 'Final testing and handover with support' }
  ]

  return (
    <div className="pt-20">
      <SEO
        title="Our Engineering Services"
        description="Explore professional electronics engineering services by IOTive. From multi-layer high-speed PCB layouts to ESP32/Arduino firmware and complete hardware prototyping."
        keywords="custom circuit design services, multi-layer PCB layout, Altium Designer, KiCAD, IoT firmware developer, sensor integration, BLE WiFi Zigbee IoT, IoT programming, microcontroller engineering"
        canonical="/services"
      />
      {/* Hero Section */}
      <section className="animated-gradient py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive electronics and IoT solutions tailored to bring your innovative ideas to life. From design to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container animated-gradient">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality, expertise, and commitment in every project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card text-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and effective workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-card text-center">
                <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container animated-gradient">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center glass-card max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your <span className="gradient-text">Project?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help bring your ideas to life. Get in touch with our team today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/contact')}>
              Get Started Now
            </Button>
            <Button variant="secondary" onClick={() => navigate('/projects')}>
              View Our Work
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Services