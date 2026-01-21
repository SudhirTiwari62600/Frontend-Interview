import axios, { AxiosInstance } from "axios"

export interface Blog {
   id?: number
  title: string
  content: string
  description?: string
  category?: string[]
  coverImage?: string
  author?: string
  createdAt?: string
}

const API: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001",
})

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await API.get<Blog[]>("/blogs")
  return res.data
}

export const getBlogById = async (id: number | string): Promise<Blog> => {
  const res = await API.get<Blog>(`/blogs/${id}`)
  return res.data
}

export const createBlog = async (data: Blog): Promise<Blog> => {
  const res = await API.post<Blog>("/blogs", data)
  return res.data
}
