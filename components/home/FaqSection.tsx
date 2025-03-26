"use client"

import { useState } from 'react'

// Translation data
const translations = {
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our wellbeing advisory services',
    question1: 'How do wellbeing initiatives impact business performance?',
    answer1: 'Research consistently shows that effective wellbeing initiatives lead to increased productivity, reduced absenteeism, lower turnover rates, and improved employee engagement. Organizations with strong wellbeing cultures typically see a positive ROI through reduced healthcare costs and improved business outcomes.',
    question2: 'How long does it take to see results from wellbeing programs?',
    answer2: 'While some benefits can be observed within weeks (such as improved employee sentiment), meaningful organizational changes typically emerge within 3-6 months of implementation. Our approach includes regular measurement and adjustment to ensure optimal results.',
    question3: 'Do you work with organizations of all sizes?',
    answer3: 'Yes, we tailor our services to organizations of all sizes, from small businesses to large corporations. Our solutions are scalable and customized to meet the specific needs and resources of your organization.',
    question4: 'How do you measure the success of wellbeing initiatives?',
    answer4: 'We establish clear metrics at the outset of our engagement, which may include employee engagement scores, absenteeism rates, turnover statistics, productivity measures, and healthcare costs. We provide regular reports to track progress and ROI.',
    question5: 'What makes your approach different from standard EAP programs?',
    answer5: 'Unlike standard Employee Assistance Programs that are reactive and often underutilized, our approach is strategic and proactive. We work at the leadership level to create sustainable wellbeing cultures, provide industry-specific solutions, and focus on measurable outcomes.',
    question6: 'How do you ensure confidentiality in your services?',
    answer6: 'Confidentiality is paramount in our work. We adhere to strict privacy protocols, use secure communication channels, and ensure that individual data is never shared without explicit consent. Our leadership sessions are conducted with the highest level of discretion.',
  },
  fr: {
    title: 'Questions Fréquemment Posées',
    subtitle: 'Trouvez des réponses aux questions courantes sur nos services de conseil en bien-être',
    question1: 'Comment les initiatives de bien-être impactent-elles la performance de l\'entreprise?',
    answer1: 'Les recherches montrent systématiquement que des initiatives de bien-être efficaces conduisent à une productivité accrue, une réduction de l\'absentéisme, des taux de rotation plus faibles et un meilleur engagement des employés. Les organisations avec de fortes cultures de bien-être voient généralement un ROI positif grâce à la réduction des coûts de santé et à l\'amélioration des résultats commerciaux.',
    question2: 'Combien de temps faut-il pour voir les résultats des programmes de bien-être?',
    answer2: 'Bien que certains avantages puissent être observés en quelques semaines (comme l\'amélioration du sentiment des employés), des changements organisationnels significatifs émergent généralement dans les 3 à 6 mois suivant la mise en œuvre. Notre approche comprend des mesures et des ajustements réguliers pour assurer des résultats optimaux.',
    question3: 'Travaillez-vous avec des organisations de toutes tailles?',
    answer3: 'Oui, nous adaptons nos services aux organisations de toutes tailles, des petites entreprises aux grandes sociétés. Nos solutions sont évolutives et personnalisées pour répondre aux besoins et ressources spécifiques de votre organisation.',
    question4: 'Comment mesurez-vous le succès des initiatives de bien-être?',
    answer4: 'Nous établissons des métriques claires au début de notre engagement, qui peuvent inclure les scores d\'engagement des employés, les taux d\'absentéisme, les statistiques de rotation, les mesures de productivité et les coûts de santé. Nous fournissons des rapports réguliers pour suivre les progrès et le ROI.',
    question5: 'Qu\'est-ce qui rend votre approche différente des programmes PAE standard?',
    answer5: 'Contrairement aux Programmes d\'Aide aux Employés standard qui sont réactifs et souvent sous-utilisés, notre approche est stratégique et proactive. Nous travaillons au niveau de la direction pour créer des cultures de bien-être durables, fournir des solutions spécifiques à l\'industrie et nous concentrer sur des résultats mesurables.',
    question6: 'Comment assurez-vous la confidentialité dans vos services?',
    answer6: 'La confidentialité est primordiale dans notre travail. Nous adhérons à des protocoles de confidentialité stricts, utilisons des canaux de communication sécurisés et veillons à ce que les données individuelles ne soient jamais partagées sans consentement explicite. Nos sessions de leadership sont menées avec le plus haut niveau de discrétion.',
  }
}

interface FaqSectionProps {
  locale: string
}

const FaqSection: React.FC<FaqSectionProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations]
  
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Toggle FAQ open/closed
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }
  
  // FAQ data
  const faqs = [
    { question: t.question1, answer: t.answer1 },
    { question: t.question2, answer: t.answer2 },
    { question: t.question3, answer: t.answer3 },
    { question: t.question4, answer: t.answer4 },
    { question: t.question5, answer: t.answer5 },
    { question: t.question6, answer: t.answer6 },
  ]
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-primary-600 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {openFaq === index && (
                <div className="bg-white px-5 py-4 rounded-b-lg shadow-md -mt-1">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection