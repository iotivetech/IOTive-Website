import React, { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogType?: string
  ogImage?: string
  canonical?: string
  robots?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/IOTiveSolutionsLLP.png', // Fallback to our existing corporate logo/banner in public/
  canonical,
  robots = 'index, follow'
}) => {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = `${title} | IOTive`
    document.title = formattedTitle

    // Helper to set or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`)
      if (element) {
        element.setAttribute('content', contentValue)
      } else {
        element = document.createElement('meta')
        element.setAttribute(attributeName, attributeValue)
        element.setAttribute('content', contentValue)
        document.head.appendChild(element)
      }
    }

    // Helper to set or create link tag
    const setLinkTag = (relValue: string, hrefValue: string) => {
      let element = document.querySelector(`link[rel="${relValue}"]`)
      if (element) {
        element.setAttribute('href', hrefValue)
      } else {
        element = document.createElement('link')
        element.setAttribute('rel', relValue)
        element.setAttribute('href', hrefValue)
        document.head.appendChild(element)
      }
    }

    // 2. Update standard meta tags
    setMetaTag('name', 'description', description)
    if (keywords) {
      setMetaTag('name', 'keywords', keywords)
    }
    setMetaTag('name', 'robots', robots)

    // Get current absolute URL
    const currentUrl = window.location.href

    // 3. Update Open Graph (OG) tags
    setMetaTag('property', 'og:title', formattedTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:url', currentUrl)

    // Make image URL absolute
    const absoluteImage = ogImage.startsWith('http')
      ? ogImage
      : `${window.location.origin}${ogImage}`
    setMetaTag('property', 'og:image', absoluteImage)

    // 4. Update Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', formattedTitle)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', absoluteImage)

    // 5. Update Canonical link
    const absoluteCanonical = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${window.location.origin}${canonical}`
      : currentUrl
    setLinkTag('canonical', absoluteCanonical)
  }, [title, description, keywords, ogType, ogImage, canonical, robots])

  return null // Render nothing visual
}

export default SEO
