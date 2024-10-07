
export interface Category {
  id: number
  name: string
  description: string
}

export interface Author {
  id: number
}

export interface Book {
  id: number
  name: string
  category: Category
  publicationDate: Date
  authors: Author[]
}