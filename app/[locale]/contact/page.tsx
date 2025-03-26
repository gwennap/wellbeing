import { Metadata } from 'next'

// Translation data
const translations = {
  en: {
    title: 'Contact Us',
    subtitle: 'Get in touch with our team to discuss how we can help your organization',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    message: 'Message',
    submit: 'Send Message',
    addressTitle: 'Our Office',
    address: '123 Business Street, London, UK, SW1A 1AA',
    emailTitle: 'Email Us',
    emailAddress: 'contact@wellbeingadvisory.com',
    phoneTitle: 'Call Us',
    phoneNumber: '+44 (0) 123 456 7890',
  },
  fr: {
    title: 'Contactez-Nous',
    subtitle: 'Prenez contact avec notre équipe pour discuter de la façon dont nous pouvons aider votre organisation',
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    company: 'Entreprise',
    message: 'Message',
    submit: 'Envoyer le Message',
    addressTitle: 'Notre Bureau',
    address: '123 Business Street, Londres, UK, SW1A 1AA',
    emailTitle: 'Envoyez-nous un Email',
    emailAddress: 'contact@wellbeingadvisory.com',
    phoneTitle: 'Appelez-Nous',
    phoneNumber: '+44 (0) 123 456 7890',
  }
}

export const generateMetadata = ({ params }: { params: { locale: string } }): Metadata => {
  const title = params.locale === 'fr' 
    ? 'Contactez-Nous | Services de Conseil en Bien-être' 
    : 'Contact Us | Wellbeing Advisory Services';
  
  const description = params.locale === 'fr'
    ? 'Contactez notre équipe pour discuter de la façon dont nous pouvons aider votre organisation avec nos services de conseil en bien-être'
    : 'Contact our team to discuss how we can help your organization with our wellbeing advisory services';
  
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.locale}/contact`,
      languages: {
        'en': '/en/contact',
        'fr': '/fr/contact',
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

export default function ContactPage({ params }: { params: { locale: string } }) {
  const t = translations[params.locale as keyof typeof translations]
  
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-1 text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">{t.company}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
                >
                  {t.submit}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.addressTitle}</h3>
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    {t.address}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.emailTitle}</h3>
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <a href="mailto:contact@wellbeingadvisory.com" className="hover:text-primary-600 transition duration-300">
                      {t.emailAddress}
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.phoneTitle}</h3>
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <a href="tel:+441234567890" className="hover:text-primary-600 transition duration-300">
                      {t.phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}