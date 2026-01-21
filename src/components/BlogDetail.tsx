import { useQuery } from "@tanstack/react-query"
import { Blog, getBlogById } from "@/api/blogApi"
import { Button } from "@/components/ui/button"

interface BlogDetailProps {
  blogId: number | string
}

export default function BlogDetail({ blogId }: BlogDetailProps) {
  const { data, isLoading, error } = useQuery<Blog>({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId),
    enabled: !!blogId,
  })

  if (!blogId) {
    return <p className="text-gray-400">Select an article</p>
  }

  if (isLoading) {
    return <p>Loading article...</p>
  }

  if (error || !data) {
    return <p className="text-red-500">Failed to load article</p>
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-72 object-cover rounded-xl"
      />

      <p className="text-indigo-600 mt-4 text-sm">
        {data.category?.join(" • ")} • 5 min read
      </p>

      <h1 className="text-3xl font-bold mt-2">
        {data.title}
      </h1>

      <Button className="mt-4">
        Share Article
      </Button>

      <div className="mt-6 text-gray-700 space-y-4">
        {data.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  )
}
