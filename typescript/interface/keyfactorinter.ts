export interface keyfactorInt {
    status: number
    data: KeyFactorDaum[]
    message: string
  }
  
  export interface KeyFactorDaum {
    _id?: string
    title?: string
    isEnabled?: boolean
    status?: string
    isDeleted?: boolean
    createdAt?: string
    updatedAt?: string
  }
  