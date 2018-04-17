import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book/book.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookCollection = [];
  //bookId;

  constructor(
    private bookService: BookService, private router: Router
  ) { }


  ngOnInit() {
    //this.bookCollection =  this.bookService.getBooks();
    this.initBooks();
  }
  deleteBook(id) {
    this.bookService.removeBookById(id)
      .subscribe(
        () => {
          this.initBooks();
        },
        (err) => {
          console.log("Error", err);
        }
      )


    //this.bookService.books.splice(index, 1);
  }


  initBooks() {
    this.bookService.getAllBooks()
      .subscribe(
        (data:any) => {
          //console.log("data from server", data);
         // this.bookCollection = data['books'];//used for without database because from data hav extract array
          this.bookCollection = data;
        },
        (err) => {
          console.log("Error", err);
        }
      )
  }

}
