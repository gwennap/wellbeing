import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ProblemSection from '@/components/home/ProblemSection'
import SolutionSection from '@/components/home/SolutionSection'
import ServicesSection from '@/components/home/ServicesSection'
import BenefitsSection from '@/components/home/BenefitsSection'
import ProcessSection from '@/components/home/ProcessSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import FaqSection from '@/components/home/FaqSection'
import CallToAction from '@/components/home/CallToAction'

export const generateMetadata = ({ params }: { params: { locale: string } }): Metadata => {
  const title = params.locale === 'fr' 
    ? 'Services de Conseil en Bien-être' 
    : 'Wellbeing Advisory Services';
  
  const description = params.locale === 'fr'
    ? 'Services professionnels de conseil en bien-être pour les entreprises et les organisations'
    : 'Professional wellbeing advisory services for businesses and organizations';
  
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        'en': '/en',
        'fr': '/fr',
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

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <div className="homepage">
      <HeroSection locale={params.locale} />
      <ProblemSection locale={params.locale} />
      <SolutionSection locale={params.locale} />
      <ServicesSection locale={params.locale} />
      <BenefitsSection locale={params.locale} />
      <ProcessSection locale={params.locale} />
      <TestimonialSection locale={params.locale} />
      <FeaturesSection locale={params.locale} />
      <FaqSection locale={params.locale} />
      <CallToAction locale={params.locale} />
    </div>
  )
}