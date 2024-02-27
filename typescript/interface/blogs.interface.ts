export interface BlogsRoot {
    status: number
    data: Daum[]
    totalPageCount: number
    totalCount: number
    currentPage: number
    currentLimit: number
    message: string
  }
  
  export interface Daum {
    _id: string
    title: string
    description: string
    image: string
    status: string
    isDeleted: boolean
  }
  