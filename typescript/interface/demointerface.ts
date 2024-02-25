export interface RootDemo {
    status: number
    data: Data
    message: string
  }
  
  export interface Data {
    date: string
    time: string
    time_zone: string
    first_name: string
    last_name: string
    email: string
    phone: string
    optional_comment: string
    isDeleted: boolean
    _id: string
    createdAt: string
    updatedAt: string
  }
  