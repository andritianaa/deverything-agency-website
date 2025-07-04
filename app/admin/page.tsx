import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminDashboard } from "@/components/admin-dashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard to manage contact form submissions.",
}

export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container">
          <AdminDashboard />
        </div>
      </main>
      <Footer />
    </>
  )
}
