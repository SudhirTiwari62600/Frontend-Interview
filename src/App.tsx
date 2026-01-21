import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BlogList from "./components/BlogList"
import BlogDetail from "./components/BlogDetail"
import CreateBlogForm from "./components/CreateBlogForm"
import Footer from "./components/Footer"

export default function App() {
  const [selectedBlog, setSelectedBlog] =
    useState<number | string | null>(null)

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-8">
        <div>
          <CreateBlogForm />
          <BlogList onSelect={setSelectedBlog} />
        </div>

        <div className="md:col-span-2">
          {selectedBlog ? (
            <BlogDetail blogId={selectedBlog} />
          ) : (
            <p className="text-gray-400">
              Select a blog from the list to view details
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
