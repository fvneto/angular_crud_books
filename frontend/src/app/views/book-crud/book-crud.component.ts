import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-book-crud',
  templateUrl: './book-crud.component.html',
  styleUrls: ['./book-crud.component.css']
})
export class BookCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Books Registration',
      icon: 'menu_book',
      routeUrl: '/bookss'
    }
  }

  ngOnInit(): void {
  }

  navigateToBookCreate(): void {
    this.router.navigate(['/books/create'])
  }

}
