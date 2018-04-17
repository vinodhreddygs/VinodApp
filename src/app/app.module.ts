import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import {BookService} from './services/book/book.service';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import {UserService} from './services/user/user.service';
import { PasswordValidationDirective } from './password-validation.directive';
import {AuthService} from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddbookComponent,
    EditbookComponent,
    NavbarComponent,
    BaseComponent,
    PostsComponent,
    UsersComponent,
    AdduserComponent,
    PasswordValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BookService, UserService, AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
