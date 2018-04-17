import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book/book.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  editbook: any = {};
  constructor(private router: Router, private bookService: BookService, private activatedRoute: ActivatedRoute) { }
  // saverange(newValue) {
  //   this.book = newValue;
  // }

  onSubmit(book) {
    this.bookService.updateBookById(book.id, book)
      .subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log("Error", err);
        }
      )
    //console.log("recived book",book);
    //this.bookService.updateBook(book);
    //this.form.markAsPristine();	    
  };
  reset() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    // console.log(this.bookCollection);
    //get the book id from the route 
    //pass it to the service fuction 
    //that function should return you the book object
    //you can show that book object in form using ngmodel
    var id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getBookById(id)
      .subscribe(
        (data) => {
          // console.log("data from server", data);
          this.editbook = data;
        },
        (err) => {
          console.log("Error", err);
        }
      )


    // this.bookId=id;

    // console.log(this.activatedRoute.snapshot.params['id']);//to check id is cmg or not
    //var bookObj=Object.assign({},this.bookService.getBook(this.activatedRoute.snapshot.params['id']))
    //var bookObj=this.bookService.getBook(this.activatedRoute.snapshot.params['id']);
    //this.editbook = bookObj;
    //this.bookCollection=result;


  }

}




