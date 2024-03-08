import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BookReadComponent } from './book-read/book-read.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookRetriveComponent } from './book-retrive/book-retrive.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { UsersComponent } from './users/users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { GuestComponent } from './guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent
},
{
    path:'user_name',
    component:HomeComponent
},
{
    path: 'about',
    component: AboutComponent
},
{
    path: 'book_read',
    component: BookReadComponent
},
{
    path: 'books',
    component: BookComponent
},
{
    path:'contactus',
    component:ContactUsComponent
},
{
    path:'signup',
    component:SignupComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path: 'admin',
    component:AdminComponent
},
{
    path:'book-add',
    component:BookAddComponent
},
{
    path:'retrive-book',
    component:BookRetriveComponent,
},
{
    path:'users',
    component:UsersComponent
},
{
    path:'updateuser/:id',
    component:UpdateuserComponent
},
{
    path:'bookupdate',
    component:BookUpdateComponent
},
{
    path:'user_dashboard',
    component:UserDashboardComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
