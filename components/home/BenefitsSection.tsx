// Translation data
const translations = {
  en: {
    title: 'Why Invest in Wellbeing?',
    subtitle: 'Unlock the potential of your workforce and organization',
    benefit1Title: 'Boost Employee Engagement',
    benefit1Desc: 'Engaged employees are more productive, innovative, and committed to your organization\'s success.',
    benefit2Title: 'Reduce Turnover Costs',
    benefit2Desc: 'Investing in wellbeing shows employees you care, improving loyalty and reducing costly turnover.',
    benefit3Title: 'Enhance Organizational Resilience',
    benefit3Desc: 'A workforce equipped with wellbeing tools is better prepared to navigate challenges and change.',
  },
  fr: {
    title: 'Pourquoi Investir dans le Bien-être?',
    subtitle: 'Libérez le potentiel de votre personnel et de votre organisation',
    benefit1Title: 'Stimulez l\'Engagement des Employés',
    benefit1Desc: 'Les employés engagés sont plus productifs, innovants et engagés envers le succès de votre organisation.',
    benefit2Title: 'Réduisez les Coûts de Rotation',
    benefit2Desc: 'Investir dans le bien-être montre aux employés que vous vous souciez d\'eux, améliorant la fidélité et réduisant la rotation coûteuse.',
    benefit3Title: 'Améliorez la Résilience Organisationnelle',
    benefit3Desc: 'Un personnel équipé d\'outils de bien-être est mieux préparé à naviguer les défis et le changement.',
  }
}

// Benefit data with icons
const benefits = [
  {
    id: 'engagement',
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
  },
  {
    id: 'turnover',
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0c-1.657 0-3-.895-3-2s1.343-2 3-2 3-.895 3-2 1.343-2 3-2m0 8c1.11 0 2.08-.402 2.599-1M12 16v1m0-1v-8"></path>
      </svg>
    ),
  },
  {
    id: 'resilience',
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
  },
];

interface BenefitsSectionProps {
  locale: string
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  // Map benefit titles and descriptions
  const benefitData = [
    { id: 'engagement', title: t.benefit1Title, description: t.benefit1Desc },
    { id: 'turnover', title: t.benefit2Title, description: t.benefit2Desc },
    { id: 'resilience', title: t.benefit3Title, description: t.benefit3Desc },
  ];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitData.map((benefit) => {
            const benefitInfo = benefits.find(b => b.id === benefit.id);
            
            return (
              <div key={benefit.id} className="bg-white rounded-lg shadow-md p-8">
                <div className="w-16 h-16 rounded-lg bg-primary-100 flex items-center justify-center mb-6">
                  {benefitInfo?.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection