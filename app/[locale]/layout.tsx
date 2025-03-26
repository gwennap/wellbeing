import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Wellbeing Advisory',
    default: 'Wellbeing Advisory Services',
  },
  description: 'Professional wellbeing advisory services for businesses and organizations',
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <>
      <Header locale={params.locale} />
      <main>{children}</main>
      <Footer locale={params.locale} />
    </>
  )
}