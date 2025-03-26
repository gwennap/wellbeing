import { redirect } from 'next/navigation'

// This is a simple redirect page that will redirect users to the appropriate language version
export default function Home() {
  // In a real application, you would detect the user's language preference
  // For now, we'll just redirect to the English version
  redirect('/en')
  
  // This return statement is never reached, but is required for TypeScript
  return null
}