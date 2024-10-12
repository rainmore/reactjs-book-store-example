import { apiService, ApiService } from '../api/api-service'
import { Page, Pageable } from '../api/types'
import { Book, Category } from './types'

export class BookService {
  constructor(private apiService: ApiService) {}

  find(pageable?: Pageable): Promise<Page<Book>> {
    return this.apiService.findPage('/api/books', undefined, pageable)
  }

  findCategories(pageable?: Pageable): Promise<Page<Category>> {
    return this.apiService.findPage('/api/books/categories', undefined, pageable)
  }
}

export const bookService: BookService = new BookService(apiService)
