import { Metadata } from 'next'
import Link from 'next/link'

// Translation data
const translations = {
  en: {
    title: 'Our Services',
    subtitle: 'Comprehensive wellbeing solutions for your organization',
    boardLevelWellbeing: 'Board-Level Wellbeing Advisory',
    boardLevelWellbeingDesc: 'Strategic wellbeing guidance for executive teams and board members.',
    diagnosticReviews: 'Diagnostic Business Reviews',
    diagnosticReviewsDesc: 'Comprehensive assessment of your organization\'s wellbeing landscape.',
    stressRecovery: 'Stress Recovery Programmes',
    stressRecoveryDesc: 'Tailored programs to help employees recover from stress and burnout.',
    sectorSupport: 'Specialised Sector Support',
    sectorSupportDesc: 'Industry-specific wellbeing solutions for your unique challenges.',
    leadershipSessions: 'Turn Up & Talk Leadership Sessions',
    leadershipSessionsDesc: 'Confidential sessions for leaders to discuss wellbeing challenges.',
    implementation: 'Wellbeing Implementation & Monitoring',
    implementationDesc: 'End-to-end support for implementing and tracking wellbeing initiatives.',
    learnMore: 'Learn More',
  },
  fr: {
    title: 'Nos Services',
    subtitle: 'Solutions complètes de bien-être pour votre organisation',
    boardLevelWellbeing: 'Conseil en Bien-être au Niveau du Conseil',
    boardLevelWellbeingDesc: 'Conseils stratégiques en matière de bien-être pour les équipes de direction et les membres du conseil.',
    diagnosticReviews: 'Examens Diagnostiques d\'Entreprise',
    diagnosticReviewsDesc: 'Évaluation complète du paysage de bien-être de votre organisation.',
    stressRecovery: 'Programmes de Récupération du Stress',
    stressRecoveryDesc: 'Programmes sur mesure pour aider les employés à se remettre du stress et de l\'épuisement professionnel.',
    sectorSupport: 'Support Sectoriel Spécialisé',
    sectorSupportDesc: 'Solutions de bien-être spécifiques à l\'industrie pour vos défis uniques.',
    leadershipSessions: 'Sessions de Leadership "Venez et Parlez"',
    leadershipSessionsDesc: 'Sessions confidentielles pour les leaders pour discuter des défis de bien-être.',
    implementation: 'Mise en Œuvre et Suivi du Bien-être',
    implementationDesc: 'Support de bout en bout pour la mise en œuvre et le suivi des initiatives de bien-être.',
    learnMore: 'En Savoir Plus',
  }
}

export const generateMetadata = ({ params }: { params: { locale: string } }): Metadata => {
  const title = params.locale === 'fr' 
    ? 'Nos Services | Services de Conseil en Bien-être' 
    : 'Our Services | Wellbeing Advisory Services';
  
  const description = params.locale === 'fr'
    ? 'Découvrez nos services complets de conseil en bien-être pour les entreprises et les organisations'
    : 'Discover our comprehensive wellbeing advisory services for businesses and organizations';
  
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.locale}/services`,
      languages: {
        'en': '/en/services',
        'fr': '/fr/services',
      },
    },
  };
};

// This function generates the static paths for the locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

// Service data with slugs
const services = [
  {
    id: 'board-level-wellbeing',
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
  },
  {
    id: 'diagnostic-reviews',
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
      </svg>
    ),
  },
  {
    id: 'stress-recovery',
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
  },
  {
    id: 'sector-support',
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
  },
  {
    id: 'leadership-sessions',
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
    ),
  },
  {
    id: 'implementation-monitoring',
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
      </svg>
    ),
  },
];

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const t = translations[params.locale as keyof typeof translations]
  
  // Map service titles and descriptions
  const serviceData = [
    { id: 'board-level-wellbeing', title: t.boardLevelWellbeing, description: t.boardLevelWellbeingDesc },
    { id: 'diagnostic-reviews', title: t.diagnosticReviews, description: t.diagnosticReviewsDesc },
    { id: 'stress-recovery', title: t.stressRecovery, description: t.stressRecoveryDesc },
    { id: 'sector-support', title: t.sectorSupport, description: t.sectorSupportDesc },
    { id: 'leadership-sessions', title: t.leadershipSessions, description: t.leadershipSessionsDesc },
    { id: 'implementation-monitoring', title: t.implementation, description: t.implementationDesc },
  ];
  
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-1 text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => {
            const serviceInfo = services.find(s => s.id === service.id);
            
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="h-3 bg-primary-600"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-primary-100 flex items-center justify-center mb-6">
                    {serviceInfo?.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <Link 
                    href={`/${params.locale}/services/${service.id}`}
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    {t.learnMore}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}