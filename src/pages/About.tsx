import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { HiUsers } from 'react-icons/hi'
import { GiQueenCrown } from 'react-icons/gi'
import { FaHandHoldingHeart, FaHandshake } from 'react-icons/fa6'

import pradipBhavale from '../assets/CoFounders_Images/pradipBhavale_2.jpeg'
import ankushSingh from '../assets/CoFounders_Images/ankushSingh.png'
import sahilKale from '../assets/CoFounders_Images/sahilKalePhoto.png'

// Type definitions
interface MissionVisionItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

interface StatItem {
  number: string
  label: string
}

const About: React.FC = () => {
  const navigate = useNavigate()

  const missionVision: MissionVisionItem[] = [
    {
      icon: GiQueenCrown,
      title: 'Our Mission',
      description: 'To become a leading innovation-driven electronics & IoT engineering company that empowers the world with smarter hardware solutions and enables future innovators to build meaningful technology.'
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Our Vision',
      description: 'To empower students, startups, and industries by providing reliable embedded development, practical engineering expertise, and hands-on learning that bridges theory with real-world application.'
    },
    {
      icon: FaHandshake,
      title: 'Our Values',
      description: 'We innovate, engineer with precision, work collaboratively, and build practical solutions that truly work.'
    }
  ]

  const team: TeamMember[] = [
    {
      name: 'Pradip D Bhavale',
      role: 'Co-Founder',
      image: pradipBhavale,
      description: 'Expert in complex PCB design and fabrication'
    },
    {
      name: 'Sahil V Kale',
      role: 'Co-Founder',
      image: sahilKale,
      description: 'Electronics Engineer'
    },
    {
      name: 'Ankush S Singh',
      role: 'Co-Founder',
      image: ankushSingh,
      description: 'Specialist in firmware and IoT solutions'
    }
  ]

  const stats: StatItem[] = [
    { number: '25+', label: 'Projects Delivered' },
    { number: '10+', label: 'Workshop Delivered' },
    { number: '150+', label: 'Satisfied Clients!' },
    { number: '24/7', label: 'Support Available!' }
  ]

  return (
    <div className="pt-20">
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
              About <span className="gradient-text">IOTive</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of engineers and innovators dedicated to transforming ideas into reality through cutting-edge electronics and IoT solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Who <span className="gradient-text">We Are</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              <b>IOTive is an embedded electronics and IoT engineering startup based in Pune, India — dedicated to turning innovative concepts into real working hardware.</b> We provide end-to-end solutions in PCB design, microcontroller programming, wireless systems, IoT connectivity, and product prototyping.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our multidisciplinary engineering team collaborates with students, startups, and companies to <b>develop smart devices and industrial solutions.</b> We build working prototypes, refine circuit designs, optimize firmware, and deliver deployable hardware systems.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We also contribute to the tech ecosystem through <b>hands-on workshops</b> and <b>technical training</b>, empowering the next generation of engineers and makers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-container animated-gradient">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Driven by innovation and guided by excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionVision.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="text-center h-full">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                  <item.icon className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate experts dedicated to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center overflow-hidden p-0">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 -mt-20 relative z-10">
                  <div className="bg-white rounded-lg p-4 shadow-xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </Card>
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
          className="text-center"
        >
          <HiUsers className="text-6xl text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Join Our <span className="gradient-text">Innovation Journey</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Be part of a community that's shaping the future of technology. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/contact')}>
              Get Started Today
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

export default About