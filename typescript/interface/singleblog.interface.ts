export interface BlogDetailsRoot {
    status: number
    data: Data
    message: string
  }
  
  export interface Data {
    _id: string
    title: string
    description: string
    image: string
    author: string
    related_blogs: RelatedBlog[]
    status: string
    isDeleted: boolean
    createdAt: string
  }
  
  export interface RelatedBlog {
    _id: string
    title: string
    image: string
    description: string
    author: string
    related_blogs: any[]
    status: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
  }
  