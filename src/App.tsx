import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// Universal scroll to top component with cross-device compatibility
function ScrollToTop(): null {
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollToTop = () => {
      try {
        // Try smooth scrolling first
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        
        // Fallback after a short delay for browsers that ignore smooth behavior
        setTimeout(() => {
          const currentPosition = window.pageYOffset || document.documentElement.scrollTop
          if (currentPosition > 0) {
            window.scrollTo(0, 0)
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
          }
        }, 300)
      } catch (error) {
        // Ultimate fallback - instant scroll
        window.scrollTo(0, 0)
      }
    }

    scrollToTop()
  }, [pathname])

  return null
}

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App