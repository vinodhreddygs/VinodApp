import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { PostsComponent } from './posts/posts.component';





const routes: Routes = [
  { path: 'base', component: BaseComponent },  
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },  
  { path: 'books/new', component: AddbookComponent },
  { path: 'books/edit/:id', component: EditbookComponent }, 
  { path: 'posts', component: PostsComponent },     
  
   { path: '', redirectTo: '/login', pathMatch: 'full'},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
