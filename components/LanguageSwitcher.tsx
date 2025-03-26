import Link from 'next/link'

interface LanguageSwitcherProps {
  locale: string
  className?: string
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ locale, className = '' }) => {
  // Get the current path without the locale
  const getPathWithoutLocale = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      const pathWithoutLocale = path.replace(/^\/(en|fr)/, '')
      return pathWithoutLocale || '/'
    }
    return '/'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Link 
        href={`/en${getPathWithoutLocale()}`}
        className={`text-sm font-medium ${locale === 'en' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
      >
        EN
      </Link>
      <span className="text-gray-300">|</span>
      <Link 
        href={`/fr${getPathWithoutLocale()}`}
        className={`text-sm font-medium ${locale === 'fr' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
      >
        FR
      </Link>
    </div>
  )
}

export default LanguageSwitcher