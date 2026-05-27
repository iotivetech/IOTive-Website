import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/common/SEO'
import HeroSection from '../components/sections/HeroSection'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { HiCheckCircle } from 'react-icons/hi'
import { HiUserGroup } from 'react-icons/hi2'
import { FaLightbulb } from 'react-icons/fa6'

// Import workshop photos
import workshop1 from '../assets/Workshop_Images/workshop1.jpg'
import workshop2 from '../assets/Workshop_Images/workshop2.jpg'
import workshop3 from '../assets/Workshop_Images/workshop3.jpg'
import workshop4 from '../assets/Workshop_Images/workshop4.jpg'
import workshop5 from '../assets/Workshop_Images/workshop5.jpg'
import workshop6 from '../assets/Workshop_Images/workshop6.jpg'

// Type definitions
interface PhotoItem {
  image: string
  title: string
  description: string
  category: 'workshop' | 'product'
}

interface WhyChooseUsItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface Project {
  title: string
  image: string
}

const Home: React.FC = () => {
  const navigate = useNavigate()
  const galleryRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Photo gallery items - updated with only workshop and product categories
  const galleryPhotos: PhotoItem[] = [
    {
      image: workshop1,
      title: 'IoT Workshop for Students',
      description: 'Hands-on training on ESP32 and sensor integration',
      category: 'workshop'
    },
    {
      image: workshop2,
      title: 'PCB Design Session',
      description: 'Teaching PCB layout and design principles',
      category: 'workshop'
    },
    {
      image: workshop3,
      title: 'Embedded Systems Training',
      description: 'Practical sessions on microcontroller programming',
      category: 'workshop'
    },
    {
      image: workshop4,
      title: 'Smart Agriculture System',
      description: 'IoT-based crop monitoring solution',
      category: 'workshop'
    },
    {
      image: workshop5,
      title: 'Industrial Automation',
      description: 'Custom PLC and control system',
      category: 'workshop'
    },
    {
      image: workshop6,
      title: 'Home Automation Setup',
      description: 'Complete smart home implementation',
      category: 'workshop'
    },
    {
      image: workshop1,
      title: 'Advanced IoT Workshop',
      description: 'Cloud integration and data analytics training',
      category: 'workshop'
    },
    {
      image: workshop2,
      title: 'PCB Fabrication Demo',
      description: 'Live demonstration of PCB manufacturing process',
      category: 'workshop'
    },
    {
      image: workshop3,
      title: 'Robotics Workshop',
      description: 'Building and programming autonomous robots',
      category: 'workshop'
    },
    {
      image: workshop4,
      title: 'Smart Energy Meter',
      description: 'IoT-based electricity monitoring device',
      category: 'workshop'
    },
    {
      image: workshop5,
      title: 'Industrial IoT Gateway',
      description: 'Custom gateway for factory automation',
      category: 'workshop'
    },
    {
      image: workshop6,
      title: 'Smart Security System',
      description: 'Complete home security solution with IoT',
      category: 'workshop'
    }
  ]

  const whyChooseUs: WhyChooseUsItem[] = [
    { icon: FaLightbulb, title: 'Innovation First', description: 'All solutions with latest technology' },
    { icon: HiCheckCircle, title: 'Quality Assured', description: 'Rigorous testing and professional standards' },
    { icon: HiUserGroup, title: 'Expert Support', description: '24/7 technical assistance and guidance' }
  ]

  const projects: Project[] = [
    { title: 'Smart Home Automation', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500' },
    { title: 'IoT Weather Station', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500' },
    { title: 'Robotics Platform', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500' },
  ]

  // Duplicate images for seamless scrolling
  const duplicatedPhotos = [...galleryPhotos, ...galleryPhotos]

  // Auto-scroll effect
  useEffect(() => {
    if (!galleryRef.current || isPaused) return

    const gallery = galleryRef.current
    let scrollSpeed = 0.5 // pixels per frame
    let animationId: number

    const animate = () => {
      gallery.scrollLeft += scrollSpeed

      // Reset scroll position when reaching the end of duplicated content
      if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        gallery.scrollLeft = 0
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)

    gallery.addEventListener('mouseenter', handleMouseEnter)
    gallery.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      gallery.removeEventListener('mouseenter', handleMouseEnter)
      gallery.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isPaused])

  return (
    <div>
      <SEO
        title="Turning Ideas into Innovation | IoT & PCB Design"
        description="IOTive is a Pune-based engineering startup providing custom IoT solutions, professional PCB design, firmware development, custom circuit engineering, and practical technical training."
        keywords="IoT Solutions, PCB Design Pune, Embedded Systems, Custom Electronics, Firmware Developer, Electronics Prototyping, IoT design Pune, hardware prototyping, custom microcontroller firmware, high-speed PCB layouts, embedded system solutions, industrial IoT gateway, smart electronics development"
        canonical="/"
      />
      {/* Hero Section */}
      <HeroSection />

      {/* Horizontal Auto-Scrolling Photo Gallery Section */}
      <section className="section-container bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            IOTive <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our workshops and products that bring innovation to life
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div
            ref={galleryRef}
            className="flex overflow-x-auto scrollbar-hide py-4 gap-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Duplicated images for seamless scrolling */}
            {duplicatedPhotos.map((photo, index) => (
              <div
                key={`${photo.title}-${index}`}
                className="flex-shrink-0 w-72 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-64 md:h-64 lg:h-64 relative rounded-2xl overflow-hidden group cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Image */}
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category Label - Always Visible */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${photo.category === 'workshop'
                    ? 'bg-blue-600 text-white'
                    : 'bg-green-600 text-white'
                    }`}>
                    {photo.category === 'workshop' ? 'Workshop' : 'Product'}
                  </span>
                </div>

                {/* Overlay with details - Shows on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">{photo.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container animated-gradient">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">IOTive</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Excellence in every aspect of electronics innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                  <item.icon className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing innovation through real-world implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-bold p-6">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <Button variant="outline" className="w-full" onClick={() => navigate('/projects')}>View Details</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button onClick={() => navigate('/projects')}>
            View All Projects
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

export default Home