import Link from 'next/link'

// Translation data
const translations = {
  en: {
    title: 'Our Simple Process',
    subtitle: 'How we work with you to transform wellbeing in your organization',
    step1Title: 'Schedule a Consultation',
    step1Desc: 'Book a free initial consultation to discuss your organization\'s wellbeing needs and challenges.',
    step2Title: 'Implement Tailored Solutions',
    step2Desc: 'We develop and implement customized wellbeing strategies based on your organization\'s unique needs.',
    step3Title: 'See Measurable Results',
    step3Desc: 'Experience improved employee engagement, reduced turnover, and enhanced organizational resilience.',
    ctaText: 'Get Started Today',
  },
  fr: {
    title: 'Notre Processus Simple',
    subtitle: 'Comment nous travaillons avec vous pour transformer le bien-être dans votre organisation',
    step1Title: 'Planifiez une Consultation',
    step1Desc: 'Réservez une consultation initiale gratuite pour discuter des besoins et des défis de bien-être de votre organisation.',
    step2Title: 'Mettez en Œuvre des Solutions Sur Mesure',
    step2Desc: 'Nous développons et mettons en œuvre des stratégies de bien-être personnalisées en fonction des besoins uniques de votre organisation.',
    step3Title: 'Voyez des Résultats Mesurables',
    step3Desc: 'Expérimentez une amélioration de l\'engagement des employés, une réduction du roulement et une résilience organisationnelle accrue.',
    ctaText: 'Commencez Aujourd\'hui',
  }
}

interface ProcessSectionProps {
  locale: string
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step1Title}</h3>
              <p className="text-gray-600">{t.step1Desc}</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step2Title}</h3>
              <p className="text-gray-600">{t.step2Desc}</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step3Title}</h3>
              <p className="text-gray-600">{t.step3Desc}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href={`/${locale}/contact`}
            className="btn-primary inline-flex items-center"
          >
            {t.ctaText}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection