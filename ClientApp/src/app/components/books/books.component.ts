import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: Book[] = []; // Add this line;

  constructor() {}

  ngOnInit() {}

}
