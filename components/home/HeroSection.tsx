import Link from 'next/link'

// Translation data
const translations = {
  en: {
    headline: 'Transform Your Organization\'s Wellbeing',
    subheadline: 'Strategic wellbeing advisory services for businesses and organizations',
    cta: 'Schedule Your Consultation',
    socialProof: '100+ satisfied clients',
    outcome1: 'Improved employee retention',
    outcome2: 'Enhanced productivity',
    outcome3: 'Reduced absenteeism',
  },
  fr: {
    headline: 'Transformez le Bien-être de Votre Organisation',
    subheadline: 'Services de conseil stratégique en bien-être pour les entreprises et les organisations',
    cta: 'Planifiez Votre Consultation',
    socialProof: 'Plus de 100 clients satisfaits',
    outcome1: 'Amélioration de la rétention des employés',
    outcome2: 'Productivité accrue',
    outcome3: 'Réduction de l\'absentéisme',
  }
}

interface HeroSectionProps {
  locale: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.headline}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              {t.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
              <Link 
                href={`/${locale}/contact`}
                className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-md font-semibold text-lg inline-block text-center"
              >
                {t.cta}
              </Link>
              
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary-400 border-2 border-white flex items-center justify-center text-sm font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-primary-100">{t.socialProof}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {[t.outcome1, t.outcome2, t.outcome3].map((outcome, i) => (
                <div key={i} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-primary-100 rounded-md mb-4">
                {/* Placeholder for hero image */}
                <div className="w-full h-full flex items-center justify-center bg-primary-200 rounded-md">
                  <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold">Craig Fearn</h3>
                    <p className="text-gray-600 text-sm">Wellbeing Advisory Founder</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "Our mission is to help organizations create environments where people can thrive both personally and professionally."
                </blockquote>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection