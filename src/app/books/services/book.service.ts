import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable()

export class BookService {

  constructor() { }

  public getBooks(): BookModel[]{
    return [
      {
        "id": 1,
        "title": "Angular Fundamentels",
        "img": "https://m.media-amazon.com/images/I/910qMwxV4RL._SY522_.jpg",
        "totalPages": 214,
        "author": "Ram Singh",
        "price": {
          "currency": "INR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Java Core Concepts",
        "img": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81SKps7OkzL._AC_UF1000,1000_QL80_.jpg",
        "totalPages": 421,
        "author": "Ajay Kulkarni",
        "price": {
          "currency": "INR",
          "value": 499
        }
      },
      {
        "id": 3,
        "title": "DSA Question Bank",
        "img": "https://m.media-amazon.com/images/I/61qdViSn7CL._AC_UF1000,1000_QL80_.jpg",
        "totalPages": 101,
        "author": "C Publications",
        "price": {
          "currency": "US-Dollar",
          "value": 20
        }
      },
      {
        "id": 4,
        "title": "Learning AI",
        "img": "https://m.media-amazon.com/images/I/51RXND+8SUL.jpg",
        "totalPages": 400,
        "author": "Ben Archery",
        "price": {
          "currency": "Us-Dollar",
          "value": 59
        }
      },
      {
        "id": 1,
        "title": "C++ Advance Concept",
        "img": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41j4hyccjoL.jpg",
        "totalPages": 214,
        "author": "Ram Singh",
        "price": {
          "currency": "INR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Unit Testing",
        "img": "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-3015-2",
        "totalPages": 421,
        "author": "Ajay Kulkarni",
        "price": {
          "currency": "INR",
          "value": 499
        }
      },
      {
        "id": 3,
        "title": "Machine Learning",
        "img": "https://m.media-amazon.com/images/I/5134Ua+BmdL._AC_UF1000,1000_QL80_.jpg",
        "totalPages": 101,
        "author": "C Publications",
        "price": {
          "currency": "US-Dollar",
          "value": 20
        }
      },
      {
        "id": 4,
        "title": "Data Science",
        "img": "https://m.media-amazon.com/images/I/91Pw2WFWG1L._AC_UF1000,1000_QL80_.jpg",
        "totalPages": 400,
        "author": "Ben Archery",
        "price": {
          "currency": "Us-Dollar",
          "value": 59
        }
      },
    ]
  }
}
