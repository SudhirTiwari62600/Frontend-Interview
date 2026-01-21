import { useQuery } from "@tanstack/react-query"
import { Blog, getBlogs } from "@/api/blogApi"
import BlogCard from "./BlogCard"
import { Skeleton } from "@/components/ui/skeleton"

interface BlogListProps {
  onSelect: (blogId: number | string) => void
}

export default function BlogList({ onSelect }: BlogListProps) {
  const { data, isLoading, error } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
    )
  }

  if (error || !data) {
    return <p>Error loading blogs</p>
  }

  return (
    <div>
      <h2 className="font-bold mb-4">Latest Articles</h2>

      <div className="space-y-3">
        {data.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={() => blog.id && onSelect(blog.id)}
          />
        ))}
      </div>
    </div>
  )
}
