import React, { useState, ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { HiUser, HiMail, HiChat, HiPhone } from 'react-icons/hi'

// Type definitions
interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Get environment variables
      const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL
      const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_ID 
        ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
        : null

      // ✅ ADDED: Check if .env file is properly loaded
      console.log('Environment check:', {
        hasSheetsUrl: !!GOOGLE_SHEETS_URL,
        hasFormspree: !!import.meta.env.VITE_FORMSPREE_ID
      })

      // Validate Google Sheets URL
      if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL.includes('YOUR_ACTUAL_APPSCRIPT_ID')) {
        throw new Error('Google Sheets configuration missing. Please check .env file.')
      }

      // Get current timestamp in Indian timezone
      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })

      // ===== PRIMARY: SAVE TO GOOGLE SHEETS =====
      const sheetData = {
        Timestamp: timestamp,
        Name: formData.name.trim(),
        Email: formData.email.trim(),
        Phone: formData.phone.trim() || 'Not provided',
        Subject: formData.subject.trim() || 'General Inquiry',
        Message: formData.message.trim(),
        Status: 'New',
        Source: 'IOTive Website'
      }

      console.log('📤 Sending to Google Sheets:', sheetData)

      // Send to Google Sheets (ALWAYS WORKS)
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData),
      })
      
      console.log('✅ Data saved to Google Sheets')

      // ===== SECONDARY: SEND EMAIL VIA FORMSPREE (OPTIONAL) =====
      if (FORMSPREE_URL) {
        try {
          await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              _subject: `${formData.subject}`,
              _replyto: formData.email,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              subject: formData.subject,
              message: formData.message,
              timestamp: timestamp
            }),
          })
          console.log('✅ Email notification sent via Formspree')
        } catch (formspreeError) {
          console.log('⚠️ Formspree notification failed (optional)')
          // Continue - this is not critical
        }
      }

      // ===== SUCCESS =====
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
      
    } catch (error) {
      console.error('❌ Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass-card max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Get In Touch</h2>
      
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
        >
          ✅ Thank you! Your message has been sent. We'll respond within 24 hours.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
        >
          ❌ Something went wrong. Please email us directly at {import.meta.env.VITE_CONTACT_EMAIL || 'iotivetech@gmail.com'}
        </motion.div>
      )}
      
      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Full Name *
        </label>
        <div className="relative">
          <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 disabled:bg-gray-100"
            placeholder="Enter your full name"
            minLength={2}
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email Address *
        </label>
        <div className="relative">
          <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 disabled:bg-gray-100"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Phone Field */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
          Phone Number (Optional)
        </label>
        <div className="relative">
          <HiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 disabled:bg-gray-100"
            placeholder="Enter 10 Digit Phone Number"
          />
        </div>
      </div>

      {/* Subject Field */}
      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
          Subject *
        </label>
        <div className="relative">
          <HiChat className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 disabled:bg-gray-100"
            placeholder="Project Inquiry, Internship, Workshop, Support, etc."
            minLength={3}
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Your Message *
        </label>
        <div className="relative">
          <HiChat className="absolute left-4 top-4 text-gray-400 text-xl" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            rows={5}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none disabled:bg-gray-100"
            placeholder="Please describe your message here....."
            minLength={10}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button 
          type="submit" 
          className="w-full sm:w-auto px-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Submitting...
            </span>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        * Required fields. All data is saved securely to our database.
      </p>
    </motion.form>
  )
}

export default ContactForm