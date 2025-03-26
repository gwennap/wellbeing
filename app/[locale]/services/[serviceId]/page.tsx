import { Metadata } from 'next'
import Link from 'next/link'
import CallToAction from '@/components/home/CallToAction'

// Service data with translations
const serviceData = {
  'board-level-wellbeing': {
    en: {
      title: 'Board-Level Wellbeing Advisory',
      description: 'Strategic wellbeing guidance for executive teams and board members.',
      content: `
        <h2>Strategic Wellbeing at the Leadership Level</h2>
        <p>Our Board-Level Wellbeing Advisory service is designed specifically for executive teams and board members who understand that organizational wellbeing starts at the top.</p>
        
        <h3>Why Board-Level Wellbeing Matters</h3>
        <p>Leadership sets the tone for the entire organization. When board members and executives prioritize wellbeing, it cascades throughout the company, creating a culture where everyone can thrive.</p>
        
        <h3>Our Approach</h3>
        <p>We work directly with your leadership team to:</p>
        <ul>
          <li>Assess current wellbeing challenges and opportunities at the executive level</li>
          <li>Develop strategic wellbeing initiatives that align with business objectives</li>
          <li>Create policies and practices that support sustainable leadership</li>
          <li>Implement wellbeing metrics in board-level reporting</li>
          <li>Provide confidential advisory support for individual leaders</li>
        </ul>
        
        <h3>Benefits</h3>
        <p>Organizations that implement our Board-Level Wellbeing Advisory services experience:</p>
        <ul>
          <li>Improved decision-making at the executive level</li>
          <li>Reduced burnout among leadership teams</li>
          <li>Better alignment between wellbeing initiatives and business strategy</li>
          <li>Enhanced leadership longevity and succession planning</li>
          <li>Stronger organizational culture driven from the top</li>
        </ul>
      `,
    },
    fr: {
      title: 'Conseil en Bien-être au Niveau du Conseil',
      description: 'Conseils stratégiques en matière de bien-être pour les équipes de direction et les membres du conseil.',
      content: `
        <h2>Bien-être Stratégique au Niveau de la Direction</h2>
        <p>Notre service de Conseil en Bien-être au Niveau du Conseil est conçu spécifiquement pour les équipes de direction et les membres du conseil qui comprennent que le bien-être organisationnel commence au sommet.</p>
        
        <h3>Pourquoi le Bien-être au Niveau du Conseil Est Important</h3>
        <p>Le leadership donne le ton pour toute l'organisation. Lorsque les membres du conseil et les dirigeants priorisent le bien-être, cela se répercute dans toute l'entreprise, créant une culture où chacun peut s'épanouir.</p>
        
        <h3>Notre Approche</h3>
        <p>Nous travaillons directement avec votre équipe de direction pour:</p>
        <ul>
          <li>Évaluer les défis et opportunités actuels en matière de bien-être au niveau exécutif</li>
          <li>Développer des initiatives stratégiques de bien-être qui s'alignent sur les objectifs commerciaux</li>
          <li>Créer des politiques et des pratiques qui soutiennent un leadership durable</li>
          <li>Mettre en œuvre des métriques de bien-être dans les rapports au niveau du conseil</li>
          <li>Fournir un soutien consultatif confidentiel pour les leaders individuels</li>
        </ul>
        
        <h3>Avantages</h3>
        <p>Les organisations qui mettent en œuvre nos services de Conseil en Bien-être au Niveau du Conseil connaissent:</p>
        <ul>
          <li>Une amélioration de la prise de décision au niveau exécutif</li>
          <li>Une réduction de l'épuisement professionnel au sein des équipes de direction</li>
          <li>Une meilleure alignement entre les initiatives de bien-être et la stratégie commerciale</li>
          <li>Une longévité accrue du leadership et une meilleure planification de la succession</li>
          <li>Une culture organisationnelle plus forte dirigée depuis le sommet</li>
        </ul>
      `,
    }
  },
  'diagnostic-reviews': {
    en: {
      title: 'Diagnostic Business Reviews',
      description: 'Comprehensive assessment of your organization\'s wellbeing landscape.',
      content: `
        <h2>Understanding Your Wellbeing Landscape</h2>
        <p>Our Diagnostic Business Reviews provide a thorough assessment of your organization's current wellbeing status, identifying strengths, weaknesses, and opportunities for improvement.</p>
        
        <h3>Comprehensive Analysis</h3>
        <p>We examine all aspects of your organization that impact wellbeing, including:</p>
        <ul>
          <li>Workplace culture and environment</li>
          <li>Leadership practices and communication</li>
          <li>Policies and procedures</li>
          <li>Physical workspace considerations</li>
          <li>Employee feedback and sentiment</li>
          <li>Current wellbeing initiatives and their effectiveness</li>
        </ul>
        
        <h3>Our Process</h3>
        <p>Our diagnostic review follows a structured approach:</p>
        <ol>
          <li>Initial consultation to understand your organization's context and challenges</li>
          <li>Data collection through surveys, interviews, and observation</li>
          <li>Analysis of quantitative and qualitative information</li>
          <li>Identification of key wellbeing factors and their impact</li>
          <li>Development of a comprehensive report with actionable recommendations</li>
        </ol>
        
        <h3>Outcomes</h3>
        <p>Following a Diagnostic Business Review, you'll receive:</p>
        <ul>
          <li>A detailed report on your organization's wellbeing status</li>
          <li>Benchmarking against industry standards</li>
          <li>Prioritized recommendations for improvement</li>
          <li>A roadmap for implementing wellbeing initiatives</li>
          <li>Metrics for measuring progress and success</li>
        </ul>
      `,
    },
    fr: {
      title: 'Examens Diagnostiques d\'Entreprise',
      description: 'Évaluation complète du paysage de bien-être de votre organisation.',
      content: `
        <h2>Comprendre Votre Paysage de Bien-être</h2>
        <p>Nos Examens Diagnostiques d'Entreprise fournissent une évaluation approfondie de l'état actuel du bien-être de votre organisation, identifiant les forces, les faiblesses et les opportunités d'amélioration.</p>
        
        <h3>Analyse Complète</h3>
        <p>Nous examinons tous les aspects de votre organisation qui ont un impact sur le bien-être, notamment:</p>
        <ul>
          <li>Culture et environnement de travail</li>
          <li>Pratiques de leadership et communication</li>
          <li>Politiques et procédures</li>
          <li>Considérations relatives à l'espace de travail physique</li>
          <li>Retour d'information et sentiment des employés</li>
          <li>Initiatives actuelles de bien-être et leur efficacité</li>
        </ul>
        
        <h3>Notre Processus</h3>
        <p>Notre examen diagnostique suit une approche structurée:</p>
        <ol>
          <li>Consultation initiale pour comprendre le contexte et les défis de votre organisation</li>
          <li>Collecte de données par le biais d'enquêtes, d'entretiens et d'observation</li>
          <li>Analyse des informations quantitatives et qualitatives</li>
          <li>Identification des facteurs clés de bien-être et de leur impact</li>
          <li>Élaboration d'un rapport complet avec des recommandations pratiques</li>
        </ol>
        
        <h3>Résultats</h3>
        <p>Suite à un Examen Diagnostique d'Entreprise, vous recevrez:</p>
        <ul>
          <li>Un rapport détaillé sur l'état du bien-être de votre organisation</li>
          <li>Une comparaison avec les normes de l'industrie</li>
          <li>Des recommandations hiérarchisées pour l'amélioration</li>
          <li>Une feuille de route pour la mise en œuvre des initiatives de bien-être</li>
          <li>Des métriques pour mesurer les progrès et le succès</li>
        </ul>
      `,
    }
  },
  // Add more services as needed
};

// Common translations
const commonTranslations = {
  en: {
    backToServices: 'Back to Services',
    contactUs: 'Contact Us',
  },
  fr: {
    backToServices: 'Retour aux Services',
    contactUs: 'Contactez-Nous',
  }
};

export const generateMetadata = ({ params }: { params: { locale: string, serviceId: string } }): Metadata => {
  // Check if service exists
  if (!serviceData[params.serviceId]) {
    return {
      title: 'Service Not Found',
    };
  }
  
  const service = serviceData[params.serviceId][params.locale as keyof typeof commonTranslations];
  
  return {
    title: `${service.title} | ${params.locale === 'fr' ? 'Services de Conseil en Bien-être' : 'Wellbeing Advisory Services'}`,
    description: service.description,
    alternates: {
      canonical: `/${params.locale}/services/${params.serviceId}`,
      languages: {
        'en': `/en/services/${params.serviceId}`,
        'fr': `/fr/services/${params.serviceId}`,
      },
    },
  };
};

// This function generates the static paths for all services and locales
export async function generateStaticParams() {
  const locales = ['en', 'fr'];
  const services = Object.keys(serviceData);
  
  const paths = [];
  
  for (const locale of locales) {
    for (const serviceId of services) {
      paths.push({ locale, serviceId });
    }
  }
  
  return paths;
}

export default function ServicePage({ params }: { params: { locale: string, serviceId: string } }) {
  // Check if service exists
  if (!serviceData[params.serviceId]) {
    return (
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The service you are looking for does not exist.</p>
            <Link 
              href={`/${params.locale}/services`}
              className="btn-primary"
            >
              {commonTranslations[params.locale as keyof typeof commonTranslations].backToServices}
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const service = serviceData[params.serviceId][params.locale as keyof typeof commonTranslations];
  const t = commonTranslations[params.locale as keyof typeof commonTranslations];
  
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-8">
            <Link 
              href={`/${params.locale}/services`}
              className="text-primary-600 hover:text-primary-700 inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              {t.backToServices}
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-1 text-gray-900 mb-4">{service.title}</h1>
            <p className="text-xl text-gray-600 mb-12">{service.description}</p>
            
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
            
            <div className="mt-12 text-center">
              <Link 
                href={`/${params.locale}/contact`}
                className="btn-primary inline-flex items-center"
              >
                {t.contactUs}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <CallToAction locale={params.locale} />
    </>
  );
}