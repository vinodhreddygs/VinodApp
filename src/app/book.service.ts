import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


export class BookService {

  books = [];
  numberOfBooks = 0;
  sampleBook = {
    title: "The Secret",
    author: "Rhonda Byrne",
    publisher: "Unknown",
    price: "100"
  }


  constructor() {
    this.addBookToList(this.sampleBook);
  }

  getBooks() {
    return this.books;
  };

  addBookToList(book) {
    book.bookId = ++this.numberOfBooks;
    this.books.push(book);
  }

  getBook(bookId) {
    //using the id get the book from books array
    //return that book object
    //console.log("bookId", bookId);
    // for (var i = 0; i < this.books.length; i++) {
    //   // console.log("current bookId", this.books[i].bookId)
    //   if (this.books[i].bookId == bookId) {
    //     //console.log("Matching");
    //     return this.books[i];
    //   }
    // }

    return this.books.filter(book => book.bookId == bookId)[0];
   /* return this.books.filter(function(book){
      return book.bookId == bookId[0];
    }) */

    // var filteredBooks =   this.books.filter(abc);

    // var filteredBooks =  this.books.filter(function(book){
    //   if(book.bookId == bookId) return true;
    // });

    // function abc(book){
    //   if(book.bookId == bookId) return true;
    // }

    // return filteredBooks[0];

    // console.log("Book in service: ", book[0]);

    // return book[0];
  }
  updateBook(book) {
    for (var i = 0; i < this.books.length; i++) {
     // console.log("...", this.books[i].bookId);
      //console.log("upd", book.bookId);
      if (this.books[i].bookId == book.bookId) {
       // console.log("matching id");
        this.books[i] = book;
      }
    }
  }
}
