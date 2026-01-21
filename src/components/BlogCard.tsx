import { Card, CardContent } from "@/components/ui/card"
import { Blog } from "@/api/blogApi"

interface BlogCardProps {
  blog: Blog
  onClick?: () => void
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:bg-gray-100 transition"
    >
      <CardContent className="p-4">
        <p className="text-xs text-indigo-600 font-semibold">
          {blog.category?.[0]}
        </p>

        <h3 className="font-semibold mt-1">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  )
}
