import { useState, ChangeEvent, FormEvent } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Blog, createBlog } from "@/api/blogApi"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface BlogFormState {
  title: string
  category: string
  description: string
  coverImage: string
  content: string
}

export default function CreateBlogForm() {
  const [form, setForm] = useState<BlogFormState>({
    title: "",
    category: "",
    description: "",
    coverImage: "",
    content: "",
  })

  const qc = useQueryClient()

  const mutation = useMutation({
    mutationFn: (data: Blog) => createBlog(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["blogs"] })

      toast.success("Blog created successfully! 🎉")

      setForm({
        title: "",
        category: "",
        description: "",
        coverImage: "",
        content: "",
      })
    },
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutation.mutate({
      title: form.title,
      description: form.description,
      content: form.content,
      coverImage: form.coverImage,
      category: form.category
        .split(",")
        .map((c) => c.trim()),
      createdAt: new Date().toISOString(),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6">
      <Input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <Input
        name="category"
        placeholder="Categories (comma separated)"
        value={form.category}
        onChange={handleChange}
      />

      <Input
        name="coverImage"
        placeholder="Cover Image URL"
        value={form.coverImage}
        onChange={handleChange}
      />

      <Textarea
        name="description"
        placeholder="Short Description"
        value={form.description}
        onChange={handleChange}
      />

      <Textarea
        name="content"
        placeholder="Full Content"
        value={form.content}
        onChange={handleChange}
        required
      />

      <Button className="w-full" disabled={mutation.isPending}>
        {mutation.isPending ? "Creating..." : "Create Blog"}
      </Button>
    </form>
  )
}
