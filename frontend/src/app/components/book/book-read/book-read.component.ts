import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {

  books: Book[]
  displayedColumns = ['id', 'name', 'author', 'price', 'action']
  
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.read().subscribe(books => {
      this.books = books
    })
  }

}
