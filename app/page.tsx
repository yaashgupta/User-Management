import UserTable from '@/components/UserTable'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Management Table',
  description: 'A simple user management table using Next.js, Shadcn, TanStack Query, and TanStack Table',
}

type SearchParams = { [key: string]: string | string[] | undefined }

export default function Home({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const page = typeof searchParams.page === 'string' 
    ? parseInt(searchParams.page, 10) 
    : 1
  
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management Table</h1>
      <UserTable initialPage={page} />
    </main>
  )
}

