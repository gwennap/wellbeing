// Translation data
const translations = {
  en: {
    title: 'Comprehensive Wellbeing Solutions',
    subtitle: 'Our services include everything you need to transform your organization\'s wellbeing culture',
    feature1: 'Evidence-based wellbeing strategies',
    feature2: 'Tailored solutions for your industry',
    feature3: 'Expert-led workshops and training',
    feature4: 'Confidential leadership support',
    feature5: 'Measurable outcomes and ROI tracking',
    feature6: 'Ongoing implementation assistance',
    feature7: 'Crisis response and management',
    feature8: 'Wellbeing policy development',
    feature9: 'Employee engagement programs',
    feature10: 'Mental health first aid training',
    feature11: 'Stress management techniques',
    feature12: 'Organizational resilience building',
  },
  fr: {
    title: 'Solutions Complètes de Bien-être',
    subtitle: 'Nos services comprennent tout ce dont vous avez besoin pour transformer la culture de bien-être de votre organisation',
    feature1: 'Stratégies de bien-être fondées sur des preuves',
    feature2: 'Solutions adaptées à votre secteur',
    feature3: 'Ateliers et formations dirigés par des experts',
    feature4: 'Soutien confidentiel au leadership',
    feature5: 'Résultats mesurables et suivi du ROI',
    feature6: 'Assistance continue à la mise en œuvre',
    feature7: 'Réponse et gestion de crise',
    feature8: 'Développement de politiques de bien-être',
    feature9: 'Programmes d\'engagement des employés',
    feature10: 'Formation aux premiers secours en santé mentale',
    feature11: 'Techniques de gestion du stress',
    feature12: 'Renforcement de la résilience organisationnelle',
  }
}

interface FeaturesSectionProps {
  locale: string
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  // Create an array of all features
  const features = [
    t.feature1,
    t.feature2,
    t.feature3,
    t.feature4,
    t.feature5,
    t.feature6,
    t.feature7,
    t.feature8,
    t.feature9,
    t.feature10,
    t.feature11,
    t.feature12,
  ]
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <svg className="w-5 h-5 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Comparison Table - Optional */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-primary-600 text-white text-center">
            <h3 className="text-xl font-bold">Why Choose Our Wellbeing Advisory Services</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">Features</th>
                  <th className="px-6 py-3 text-center text-primary-600 font-semibold">Our Services</th>
                  <th className="px-6 py-3 text-center text-gray-500 font-semibold">Typical EAP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-700">Board-level strategic support</td>
                  <td className="px-6 py-4 text-center text-primary-600">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-500">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-700">Industry-specific solutions</td>
                  <td className="px-6 py-4 text-center text-primary-600">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-500">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-700">Measurable ROI tracking</td>
                  <td className="px-6 py-4 text-center text-primary-600">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-500">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-700">Employee counseling</td>
                  <td className="px-6 py-4 text-center text-primary-600">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-500">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection