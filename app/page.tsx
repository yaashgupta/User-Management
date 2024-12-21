import UserTable from "@/components/UserTable";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";

export const metadata: Metadata = {
  title: "User Management Table",
  description: "A simple user management table using Next.js, Shadcn, TanStack Query, and TanStack Table",
};

export default function Home() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? parseInt(searchParams.get("page")!, 10) : 1;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management Table</h1>
      <UserTable initialPage={page} />
    </main>
  );
}
