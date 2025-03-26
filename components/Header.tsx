import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

// Translation data
const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
  },
  fr: {
    home: 'Accueil',
    services: 'Services',
    contact: 'Contact',
  }
}

interface HeaderProps {
  locale: string
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="text-2xl font-bold text-primary-600">
              Wellbeing Advisory
            </Link>
            
            <div className="md:hidden">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-2 md:space-y-0">
              <li>
                <Link 
                  href={`/${locale}`}
                  className="text-gray-700 hover:text-primary-600 font-medium"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/services`}
                  className="text-gray-700 hover:text-primary-600 font-medium"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/contact`}
                  className="text-gray-700 hover:text-primary-600 font-medium"
                >
                  {t.contact}
                </Link>
              </li>
              <li className="hidden md:block">
                <LanguageSwitcher locale={locale} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header