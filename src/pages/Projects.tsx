import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/common/SEO'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { HiX, HiArrowLeft, HiArrowRight, HiExternalLink } from 'react-icons/hi'

// Type definitions
interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  fullDescription: string
  technologies: string[]
  features: string[]
  specifications?: string[]
}

interface Category {
  id: string
  label: string
}

interface Stat {
  number: string
  label: string
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all')
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'AGUARD Industrial Safety Platform',
      category: 'iot',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      description: 'Wireless IIoT monitoring system for ammonia gas detection and safety compliance.',
      fullDescription: 'Developed an end-to-end wireless Industrial IoT (IIoT) monitoring system designed for ammonia gas detection and automated safety compliance reporting. Engineered the hardware nodes using ESP32 and LoRa for robust, long-range communication in industrial environments, paired with a real-time cloud dashboard for live data visualization.',
      technologies: ['ESP32', 'LoRa', 'Firebase', 'C++', 'React'],
      features: [
        'Ammonia gas detection in industrial environments',
        'Automated safety compliance reporting',
        'Long-range LoRa communication architecture',
        'Real-time cloud dashboard for data visualization',
        'Robust hardware node engineering'
      ]
    },
    {
      id: 2,
      title: 'Autonomous Drone Flight Controller',
      category: 'robotics',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800',
      description: 'Custom autonomous flight controller featuring EKF state estimation and waypoint navigation.',
      fullDescription: 'Engineered a custom autonomous flight controller centered around the high-performance STM32H7 architecture. Integrated BMI088 IMUs, barometric sensors, and GPS modules, implementing Extended Kalman Filter (EKF) state estimation and precise waypoint navigation algorithms.',
      technologies: ['STM32H7', 'C/C++', 'EKF', 'Sensor Fusion', 'GPS'],
      features: [
        'High-performance STM32H7 architecture integration',
        'Extended Kalman Filter (EKF) state estimation',
        'Precise waypoint navigation algorithms',
        'BMI088 IMU and barometric sensor fusion',
        'Real-time GPS tracking and telemetry'
      ]
    },
    {
      id: 3,
      title: 'Custom PIC18F4550 USB Bootloader',
      category: 'pcb',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      description: 'Professional-grade custom USB bootloader for seamless firmware updates.',
      fullDescription: 'Designed and implemented a custom USB bootloader starting strictly from memory location 0000 for seamless firmware updates. Optimized the hardware configuration for a specific custom board, mapping dedicated entry pins and providing visual status feedback via an indicator LED mapped to pin B0. Developed an accompanying GUI in Python for streamlined flashing.',
      technologies: ['PIC18F4550', 'Bare-Metal C', 'Python', 'USB Protocol'],
      features: [
        'Seamless USB firmware update capabilities',
        'Execution starting from memory location 0000',
        'Custom Python-based GUI for flashing',
        'Dedicated RE0 bootloader entry configuration',
        'Pin B0 boot mode LED indicator integration'
      ],
      specifications: [
        'Microcontroller: PIC18F4550',
        'Memory Start Location: 0000',
        'Boot Entry Pin: RE0',
        'Indicator Pin: B0'
      ]
    },
    {
      id: 4,
      title: 'Solar Power Management System',
      category: 'hardware',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
      description: 'High-efficiency solar street light controller with MPPT charging for 12V batteries.',
      fullDescription: 'Prototyped a highly efficient solar street light controller featuring Maximum Power Point Tracking (MPPT) for 12V battery systems. Designed specifically for robust, offline reliability, the architecture operates entirely via hardware status indicators, intentionally eliminating fragile displays or internet connectivity requirements.',
      technologies: ['Power Electronics', 'PCB Design', 'CN3722', 'MPPT'],
      features: [
        'Maximum Power Point Tracking (MPPT) integration',
        'Hardware status indicators only (no display/internet)',
        'Optimized for 12V battery systems',
        'Safe handling of 25V/5A power configurations',
        'CN3722 charge controller implementation'
      ]
    },
    {
      id: 5,
      title: 'ESP32 Power & Battery Monitoring Dashboard',
      category: 'iot',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800',
      description: 'Real-time power monitoring solution utilizing precision current and voltage sensors.',
      fullDescription: 'Developed a comprehensive power monitoring dashboard by interfacing INA219 and ACS712 current and voltage sensors with an ESP32. The system accurately reads DC current and tracks battery metrics in real-time for precise power profiling and system health monitoring.',
      technologies: ['ESP32', 'INA219', 'ACS712', 'C++'],
      features: [
        'Real-time DC current reading',
        'Battery metric tracking and profiling',
        'INA219 and ACS712 sensor integration',
        'ESP32-based processing and telemetry transmission'
      ]
    },
    {
      id: 6,
      title: 'Smart Home Automation System',
      category: 'iot',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
      description: 'Complete home automation solution with mobile app and energy monitoring.',
      fullDescription: 'A comprehensive smart home system that allows users to control lighting, appliances, security, and HVAC systems remotely through a mobile application. The system features energy monitoring capabilities that provide real-time consumption data and automated optimization to reduce electricity costs by up to 30%.',
      technologies: ['ESP32', 'IoT', 'Mobile App', 'Cloud', 'React Native', 'MQTT'],
      features: [
        'Voice control integration with Alexa & Google Assistant',
        'Real-time energy monitoring dashboard',
        'Automated scheduling and scene creation',
        'Multi-user access control',
        'Offline functionality with local server',
        'Push notifications for security alerts'
      ],
      specifications: [
        'Processor: ESP32 Dual Core 240MHz',
        'Connectivity: WiFi, Bluetooth 5.0',
        'Power: 5V DC, 2A',
        'Range: Up to 100m indoor',
        'Compatibility: iOS 12+, Android 8+',
        'Cloud Storage: 30 days history'
      ]
    },
    {
      id: 7,
      title: 'ESP-NOW & LoRa Telemetry Network',
      category: 'iot',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      description: 'Long-range sensor data transmission system utilizing SX1278 LoRa and ESP-NOW protocols.',
      fullDescription: 'Designed a decentralized IoT networking solution for multi-node sensor data aggregation. The architecture leverages ESP-NOW for rapid, low-latency local communication and SX1278 LoRa modules for robust, long-range telemetry transmission without relying on traditional Wi-Fi infrastructure.',
      technologies: ['ESP32', 'SX1278 LoRa', 'ESP-NOW', 'C++'],
      features: [
        'Multi-node sensor data aggregation',
        'Low-latency ESP-NOW local networking',
        'Long-range SX1278 LoRa transmission',
        'Infrastructure-less telemetry architecture'
      ]
    },
    {
      id: 8,
      title: 'Custom Motor Controller PCB',
      category: 'pcb',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
      description: 'High-performance motor controller with advanced features.',
      fullDescription: 'A custom-designed PCB for precise motor control applications, featuring advanced PWM control, current sensing, temperature monitoring, and multiple protection circuits. Suitable for industrial automation, robotics, and electric vehicles.',
      technologies: ['Motor Control', 'Power Electronics', 'PCB', 'Embedded C', 'KiCad'],
      features: [
        'Advanced PWM control (up to 100kHz)',
        'Real-time current and voltage monitoring',
        'Over-current and over-temperature protection',
        'CAN bus communication interface',
        'Multiple motor support (BLDC, Stepper, DC)',
        'Compact 4-layer PCB design'
      ]
    },
    {
      id: 9,
      title: 'ATtiny85 Digital Buck-Boost Converter',
      category: 'hardware',
      image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800',
      description: 'Compact digital power supply utilizing an ATtiny85 microcontroller for custom voltage regulation.',
      fullDescription: 'Designed and developed a custom digitally-controlled buck-boost converter powered by an ATtiny85 microcontroller. The system leverages the high-frequency PWM capabilities of the ATtiny85 alongside internal ADC channels to provide closed-loop voltage regulation, enabling efficient and flexible step-up and step-down power delivery in a highly compact footprint.',
      technologies: ['ATtiny85', 'Power Electronics', 'PWM Control', 'C/C++', 'PCB Design'],
      features: [
        'Digitally controlled buck-boost topology',
        'Closed-loop voltage regulation via ATtiny85 ADC',
        'High-frequency PWM switching control',
        'Ultra-compact hardware footprint for embedded applications',
        'Custom firmware for dynamic load adjustments'
      ]
    }
  ];

  const categories: Category[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'iot', label: 'IoT Solutions' },
    { id: 'pcb', label: 'PCB Design' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'hardware', label: 'hardware'}
  ]

  const stats: Stat[] = [
    { number: '25+', label: 'Projects Completed' },
    { number: '45+', label: 'PCB Designs' },
    { number: '20+', label: 'IoT Solutions' },
    { number: '98%', label: 'Client Satisfaction' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const handleViewDetails = (projectId: number) => {
    setExpandedProjectId(projectId)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }

  const handleCloseDetails = () => {
    setExpandedProjectId(null)
    document.body.style.overflow = 'auto'
    document.documentElement.style.overflow = 'auto'
  }

  const handleNavigateProject = (direction: 'prev' | 'next') => {
    if (!expandedProjectId) return

    const currentIndex = filteredProjects.findIndex(p => p.id === expandedProjectId)
    let newIndex: number

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1
    }

    setExpandedProjectId(filteredProjects[newIndex].id)
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedProjectId) {
        handleCloseDetails()
      }
    }

    if (expandedProjectId) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [expandedProjectId])

  // Handle arrow keys for navigation
  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (!expandedProjectId) return

      if (e.key === 'ArrowLeft') {
        handleNavigateProject('prev')
      } else if (e.key === 'ArrowRight') {
        handleNavigateProject('next')
      }
    }

    if (expandedProjectId) {
      document.addEventListener('keydown', handleArrowKeys)
    }

    return () => {
      document.removeEventListener('keydown', handleArrowKeys)
    }
  }, [expandedProjectId])

  const expandedProject = expandedProjectId 
    ? filteredProjects.find(p => p.id === expandedProjectId)
    : null

  return (
    <div className="pt-20">
      <SEO
        title="Portfolio & Case Studies"
        description="Check out the successfully delivered hardware and IoT projects by IOTive. Showcasing real-world industrial prototypes and innovative IoT devices."
        keywords="embedded hardware case studies, industrial automation prototypes, custom IoT dashboard integration, electronics portfolio, hardware solutions showcase, circuit design projects"
        canonical="/projects"
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
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative projects spanning IoT, robotics, PCB design, and embedded systems. Click "View Details" to see comprehensive project information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id)
                setExpandedProjectId(null)
              }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Expanded Project View - FIXED IMAGE MODAL */}
        <AnimatePresence>
          {expandedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
                onClick={handleCloseDetails}
              />

              {/* Modal - FIXED LAYOUT */}
              <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    type: "spring",
                    damping: 25,
                    stiffness: 300
                  }}
                  className="bg-white w-full max-w-6xl max-h-[90vh] md:max-h-[85vh] rounded-xl md:rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header - FIXED */}
                  <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handleCloseDetails}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <HiX className="text-xl text-gray-700" />
                      </button>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {expandedProject.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleNavigateProject('prev')}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Previous project"
                      >
                        <HiArrowLeft className="text-xl text-gray-700" />
                      </button>
                      <button
                        onClick={() => handleNavigateProject('next')}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Next project"
                      >
                        <HiArrowRight className="text-xl text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Main Content - Split Layout */}
                  <div className="flex flex-col lg:flex-row flex-1 min-h-0">
                    {/* FIXED IMAGE SECTION - Doesn't scroll */}
                    <div className="lg:w-1/2 p-6 md:p-8 flex-shrink-0">
                      <div className="sticky top-24 h-[300px] md:h-[400px] lg:h-[calc(85vh-200px)] rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={expandedProject.image}
                          alt={expandedProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* SCROLLABLE CONTENT SECTION */}
                    <div className="lg:w-1/2 p-6 md:p-8 overflow-y-auto">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {expandedProject.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
                        {expandedProject.fullDescription}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {expandedProject.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      {expandedProject.features && (
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
                          <ul className="space-y-2">
                            {expandedProject.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Specifications */}
                      {expandedProject.specifications && (
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h3>
                          <div className="bg-gray-50 rounded-xl p-4">
                            <ul className="space-y-2">
                              {expandedProject.specifications.map((spec, idx) => (
                                <li key={idx} className="flex items-center text-gray-700">
                                  <span className="text-gray-400 mr-2">•</span>
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer - FIXED */}
                  <div className="border-t border-gray-200 p-3 md:p-6 bg-white sticky bottom-0">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <div className="flex gap-3 w-full sm:w-auto">
                        <Button
                          onClick={() => window.location.href = '/contact'}
                          className="flex-1 sm:flex-none"
                        >
                          <span className="flex justify-center items-center gap-2">
                            Inquire About Project
                            <HiExternalLink />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Projects Grid - FIXED IMAGE SIZES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden p-0 h-full flex flex-col hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                {/* FIXED HEIGHT IMAGE CONTAINER */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-blue-600 capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3 text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-600 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-blue-100 text-blue-600 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-sm md:text-base"
                    onClick={() => handleViewDetails(project.id)}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-xl">No projects found in this category.</p>
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <section className="section-container animated-gradient">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card text-center p-4 md:p-6"
            >
              <h3 className="text-3xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-gray-700 font-medium text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center glass-card max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a <span className="gradient-text">Project Idea?</span>
          </h2>
          <p className="text-gray-700 mb-8 text-base md:text-xl">
            Let's turn your vision into reality. Our team is ready to help you create something amazing.
          </p>
          <Button 
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-3 text-base md:text-lg"
          >
            Start Your Project Today
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

export default Projects