import {apiService, ApiService } from '../api/api-service';
import { Page, Pageable } from '../api/types';
import { Book } from './types';

export class BookService {

  constructor(private apiService: ApiService) {

  }

  find(pageable?: Pageable, cancelToken?): Promise<Page<Book>> {
    return this.apiService.findPage('/api/books', undefined, pageable)
  }
}

export const bookService: BookService = new BookService(apiService)