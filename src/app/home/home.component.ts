import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookCollection;
  //bookId;

  constructor(
    private bookService: BookService, private router:Router 
  ) {  }
   
 
  ngOnInit() {
    this.bookCollection =  this.bookService.getBooks();
   
   
  }
  deleteBook(index){
    this.bookService.books.splice(index, 1);
  }
  
}
