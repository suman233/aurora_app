export interface ClientRoot {
    status: number
    data: FeedBack[]
    message: string
  }
  
  export interface FeedBack {
    _id: string
    name: string
    image: string
    description: string
    rating: number
    status: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
  }
  