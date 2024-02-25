export interface keytabinter {
    status: number
    data: TabDaum[]
    message: string
  }
  
  export interface TabDaum {
    _id: string
    home_tab_id: string
    title: string
    logo: string
    description: string
    image: string
    status: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
  }
  