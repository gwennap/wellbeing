// Translation data
const translations = {
  en: {
    title: 'Your Partner in Organizational Wellbeing',
    subtitle: 'We guide you towards a healthier, more productive workplace',
    point1: 'Deep understanding of workplace wellbeing challenges',
    point2: 'Proven strategies tailored to your organization\'s needs',
    point3: 'Expert guidance from experienced wellbeing practitioners',
    point4: 'Focus on sustainable change and measurable results',
  },
  fr: {
    title: 'Votre Partenaire en Bien-être Organisationnel',
    subtitle: 'Nous vous guidons vers un lieu de travail plus sain et plus productif',
    point1: 'Compréhension approfondie des défis du bien-être au travail',
    point2: 'Stratégies éprouvées adaptées aux besoins de votre organisation',
    point3: 'Conseils d\'experts de praticiens expérimentés en bien-être',
    point4: 'Accent sur le changement durable et les résultats mesurables',
  }
}

interface SolutionSectionProps {
  locale: string
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-gray-900 mb-4">{t.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
            
            <ul className="space-y-4">
              {[
                t.point1,
                t.point2,
                t.point3,
                t.point4
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="aspect-w-1 aspect-h-1 bg-primary-100 rounded-full mb-4 mx-auto w-48 h-48">
                {/* Placeholder for team/founder image */}
                <div className="w-full h-full flex items-center justify-center bg-primary-200 rounded-full">
                  <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Craig Fearn</h3>
                <p className="text-primary-600 font-medium">Founder & Lead Advisor</p>
                <p className="text-gray-600 mt-2 text-sm">
                  With years of experience in mental health and organizational development, Craig leads our team in delivering impactful wellbeing solutions.
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 -left-8 w-20 h-20 bg-secondary-300 rounded-lg transform rotate-45 opacity-20"></div>
            <div className="absolute bottom-0 -right-8 w-24 h-24 bg-primary-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection