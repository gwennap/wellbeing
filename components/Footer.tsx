import Link from 'next/link'

// Translation data
const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
    copyright: '© 2025 Wellbeing Advisory. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
  fr: {
    home: 'Accueil',
    services: 'Services',
    contact: 'Contact',
    copyright: '© 2025 Services de Conseil en Bien-être. Tous droits réservés.',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation',
  }
}

interface FooterProps {
  locale: string
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${locale}`} className="text-2xl font-bold text-white">
              Wellbeing Advisory
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Professional wellbeing advisory services for businesses and organizations. 
              We help create healthier, more productive workplaces through strategic wellbeing initiatives.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}`}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/services`}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/contact`}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>123 Business Street, London, UK</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>contact@wellbeingadvisory.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+44 (0) 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-400">{t.copyright}</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link 
                href={`/${locale}/privacy-policy`}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {t.privacyPolicy}
              </Link>
              <Link 
                href={`/${locale}/terms-of-service`}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {t.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer