import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import{FormGroup, FormControl, Validators} from '@angular/forms';

//import { BookService } from '../book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private router:Router, private bookService: BookService) { }
  userForm= new FormGroup({
    title:new FormControl('', Validators.required),
    author:new FormControl(),
    publisher:new FormControl(),
    price:new FormControl()
    
  });

 
  book:any={};



onSubmit(value){
 // console.log("value",value);
  this.bookService.addBookToList(value);
  //this.form.markAsPristine();	
  this.router.navigate(['/home']);
};

reset(){
  
  this.router.navigate(['/home']);
}


 
  ngOnInit() {

  }

}
