// Translation data
const translations = {
  en: {
    title: 'Challenges Organizations Face Today',
    subtitle: 'Does this sound familiar?',
    problem1: 'Increasing employee burnout and stress levels',
    problem2: 'High turnover rates and difficulty retaining talent',
    problem3: 'Rising healthcare costs and absenteeism',
    problem4: 'Lack of engagement and decreased productivity',
    problem5: 'Difficulty measuring wellbeing ROI',
    problem6: 'Ineffective or underutilized wellbeing programs',
  },
  fr: {
    title: 'Défis Auxquels les Organisations Font Face Aujourd\'hui',
    subtitle: 'Cela vous semble-t-il familier?',
    problem1: 'Augmentation de l\'épuisement professionnel et des niveaux de stress',
    problem2: 'Taux de rotation élevés et difficulté à retenir les talents',
    problem3: 'Augmentation des coûts de santé et de l\'absentéisme',
    problem4: 'Manque d\'engagement et baisse de productivité',
    problem5: 'Difficulté à mesurer le retour sur investissement du bien-être',
    problem6: 'Programmes de bien-être inefficaces ou sous-utilisés',
  }
}

interface ProblemSectionProps {
  locale: string
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            t.problem1,
            t.problem2,
            t.problem3,
            t.problem4,
            t.problem5,
            t.problem6
          ].map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex items-start"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection