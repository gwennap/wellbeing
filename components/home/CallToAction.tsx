import Link from 'next/link'

// Translation data
const translations = {
  en: {
    title: 'Ready to Transform Your Organization\'s Wellbeing?',
    subtitle: 'Schedule a free consultation to discuss how we can help your organization thrive',
    ctaButton: 'Get Started Today',
    secondaryButton: 'Learn More About Our Services',
  },
  fr: {
    title: 'Prêt à Transformer le Bien-être de Votre Organisation?',
    subtitle: 'Planifiez une consultation gratuite pour discuter de la façon dont nous pouvons aider votre organisation à prospérer',
    ctaButton: 'Commencez Aujourd\'hui',
    secondaryButton: 'En Savoir Plus Sur Nos Services',
  }
}

interface CallToActionProps {
  locale: string
}

const CallToAction: React.FC<CallToActionProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  return (
    <section className="py-16 md:py-24 bg-primary-600 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-primary-100 mb-8">{t.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href={`/${locale}/contact`}
              className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-md font-semibold text-lg inline-block"
            >
              {t.ctaButton}
            </Link>
            
            <Link 
              href={`/${locale}/services`}
              className="bg-transparent border-2 border-white text-white hover:bg-primary-700 px-8 py-3 rounded-md font-semibold text-lg inline-block"
            >
              {t.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction