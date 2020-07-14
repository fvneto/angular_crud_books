import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = {
    name: '',
    author: '',
    price: null
  }

  constructor(private bookService: BookService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createBook(): void {
    this.bookService.create(this.book).subscribe(() => {
      this.bookService.showMessage('book added!')
      this.router.navigate(['/books'])
    })
  }

  cancel(): void {
    this.router.navigate(['/books'])
  }
}
