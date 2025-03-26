// Translation data
const translations = {
  en: {
    title: 'What Our Clients Say',
    subtitle: 'Hear from organizations that have transformed their wellbeing culture',
    testimonial1Author: 'Richard Sharpe',
    testimonial1Position: 'C-Suite Operational Board Leader',
    testimonial1Text: 'I\'ve had the privilege of working with Craig through the IOD and projects, and what truly sets him apart is his extensive knowledge, continued deep empathy and openness to speak from personal experience. His expertise in mental health support is unrivalled, and I recommend his insight and services to anyone in need.',
    testimonial2Author: 'Chris Saxby',
    testimonial2Position: 'Executive Leader',
    testimonial2Text: 'Craig has led the IoD\'s activity in Cornwall as a most effective ambassador. His direct encouragement of learning has supported many of us, me among them. Craig\'s professional focus on wellbeing leadership has also been evident to those attending - not with a salesman\'s pitch, but through his natural affinity for the subject within his daily approach to all his activities.',
    testimonial3Author: 'Des Bell',
    testimonial3Position: 'Managing Director at Furniss of Cornwall Ltd',
    testimonial3Text: 'Others have rightly recommended Craig as a great Wellbeing practitioner. I would like to recommend Craig\'s Leadership, Organisational and Interpersonal skills as the Cornwall IOD Ambassador. Craig has grown the membership, galvanised diverse opinions, and provided Leadership on business issues: Highly recommended for these qualities.',
  },
  fr: {
    title: 'Ce Que Disent Nos Clients',
    subtitle: 'Écoutez les organisations qui ont transformé leur culture de bien-être',
    testimonial1Author: 'Richard Sharpe',
    testimonial1Position: 'Leader Opérationnel de Conseil d\'Administration',
    testimonial1Text: 'J\'ai eu le privilège de travailler avec Craig à travers l\'IOD et des projets, et ce qui le distingue vraiment, c\'est sa vaste connaissance, son empathie profonde continue et son ouverture à parler de son expérience personnelle. Son expertise en soutien de santé mentale est sans égale, et je recommande son aperçu et ses services à toute personne dans le besoin.',
    testimonial2Author: 'Chris Saxby',
    testimonial2Position: 'Leader Exécutif',
    testimonial2Text: 'Craig a dirigé l\'activité de l\'IoD en Cornouailles en tant qu\'ambassadeur des plus efficaces. Son encouragement direct à l\'apprentissage a soutenu beaucoup d\'entre nous, moi y compris. L\'accent professionnel de Craig sur le leadership en matière de bien-être a également été évident pour ceux qui y assistaient - pas avec un discours de vendeur, mais par son affinité naturelle pour le sujet dans son approche quotidienne de toutes ses activités.',
    testimonial3Author: 'Des Bell',
    testimonial3Position: 'Directeur Général de Furniss of Cornwall Ltd',
    testimonial3Text: 'D\'autres ont à juste titre recommandé Craig comme un excellent praticien du bien-être. Je voudrais recommander les compétences de leadership, d\'organisation et interpersonnelles de Craig en tant qu\'ambassadeur de l\'IOD de Cornouailles. Craig a développé l\'adhésion, galvanisé diverses opinions et fourni un leadership sur les questions commerciales: Hautement recommandé pour ces qualités.',
  }
}

interface TestimonialSectionProps {
  locale: string
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Testimonial */}
          <div className="lg:col-span-3 bg-primary-600 text-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full bg-primary-400 flex items-center justify-center text-white text-2xl font-bold">
                  {t.testimonial1Author.charAt(0)}
                </div>
              </div>
              <div>
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "{t.testimonial1Text}"
                </blockquote>
                <div className="font-semibold text-lg">{t.testimonial1Author}</div>
                <div className="text-primary-200">{t.testimonial1Position}</div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold">
                {t.testimonial2Author.charAt(0)}
              </div>
            </div>
            <blockquote className="text-gray-700 italic mb-6">
              "{t.testimonial2Text}"
            </blockquote>
            <div className="font-semibold">{t.testimonial2Author}</div>
            <div className="text-gray-500 text-sm">{t.testimonial2Position}</div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold">
                {t.testimonial3Author.charAt(0)}
              </div>
            </div>
            <blockquote className="text-gray-700 italic mb-6">
              "{t.testimonial3Text}"
            </blockquote>
            <div className="font-semibold">{t.testimonial3Author}</div>
            <div className="text-gray-500 text-sm">{t.testimonial3Position}</div>
          </div>
          
          {/* Decorative Element */}
          <div className="hidden lg:block bg-white rounded-lg shadow-md p-8">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-primary-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
                <p className="text-gray-500">100+ satisfied clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection