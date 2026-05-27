import React from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import ContactForm from '../components/common/ContactForm'
import Card from '../components/ui/Card'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'

import { FaClock } from "react-icons/fa6"


// Type definitions
interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  content: string
  link: string | null
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  name: string
  url: string
  color: string
}

interface FAQ {
  question: string
  answer: string
}

const Contact: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      content: 'Pune, Maharashtra, India',
      link: null
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      content: 'iotivetech@gmail.com',
      link: 'mailto:iotivetech@gmail.com'
    },
    {
      icon: FaPhoneAlt,
      title: 'Call Us',
      content: '+91 95036 67496',
      link: 'tel:+919503667496'
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      content: 'Mon - Sat: 10 AM - 6 PM',
      link: null
    }
  ]

  const socialLinks: SocialLink[] = [
    {
      icon: FaInstagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/iotive.official',
      color: 'hover:bg-pink-500'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/iotive',
      color: 'hover:bg-blue-600'
    },
    {
      icon: FaYoutube,
      name: 'YouTube',
      url: 'https://youtube.com/@iotive',
      color: 'hover:bg-red-600'
    }
  ]

  const faqs: FAQ[] = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project duration varies based on complexity. Simple PCB designs take 1-2 weeks, while complete IoT solutions may take 4-8 weeks.'
    },
    {
      question: 'Do you provide support after project completion?',
      answer: 'Yes! We offer comprehensive post-project support including troubleshooting, modifications, and technical guidance.'
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! We can assist with debugging, optimization, or adding new features to your existing projects.'
    },
    {
      question: 'Do you offer training programs?',
      answer: 'Yes, we conduct regular workshops and custom training sessions on IoT, PCB design, and embedded systems.'
    }
  ]

  return (
    <div className="pt-20">
      <SEO
        title="Get in Touch"
        description="Let's discuss your next custom hardware project, IoT product idea, or academic training. Contact IOTive in Pune for a free engineering consultation."
        keywords="IoT consultation Pune, hire embedded developers, custom circuit development quote, electronics design partners, IoT training workshops, hardware engineers contact, IOTive email"
        canonical="/contact"
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or looking for opportunities with IOTive? <br />Reach out to us — whether you want to collaborate, develop a product, or explore internship possibilities, we’d love to connect. Send us a message and we’ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <info.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-blue-600 hover:text-purple-600 transition-colors font-medium"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Map and Social Links */}
          <div className="space-y-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden p-0 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.947178363079!2d73.86470357423778!3d18.53128898256439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10075194af5%3A0x3f2cf3aa14dff029!2sAISSMS%20IOIT!5e0!3m2!1sen!2sin!4v1779876878676!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IOTive Location Map - Pune, Maharashtra"
                />
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Connect With Us
                </h3>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
                <p className="text-center text-gray-600 mt-6">
                  Follow us on social media for updates, tutorials, and behind-the-scenes content!
                </p>
              </Card>
            </motion.div>

            {/* Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Why Reach Out?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Free consultation for your project',
                    'Expert technical guidance',
                    'Custom solutions tailored to your needs',
                    'Quick turnaround times',
                    'Competitive pricing'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container animated-gradient">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Contact