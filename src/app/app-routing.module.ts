import { Component, NgModule } from '@angular/core';
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
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { authGuard } from './auth.guard';
import { adminauthGuard } from './adminauth.guard';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { AddbyuserComponent } from './addbyuser/addbyuser.component';
const routes: Routes = [
  {
    path: '',
    component: GuestComponent
},
{
    path:'user_name',
    component:HomeComponent,
    canActivate:[authGuard]
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
    path:'opendetails/:id',
    component:BookDetailComponent,
    // canActivate:[authGuard]
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
    path:'userlogin',
    component:UserAuthComponent,
    canActivate:[authGuard]
},
{
    path: 'admin',
    component:AdminComponent,
    canActivate:[adminauthGuard]
},
{
    path:'book-add',
    component:BookAddComponent,
    canActivate:[adminauthGuard]
},
{
    path:'retrive-book',
    component:BookRetriveComponent,
    canActivate:[adminauthGuard]
},
{
    path:'users',
    component:UsersComponent,
    canActivate:[adminauthGuard]
},
{
    path:'updateuser/:id',
    component:UpdateuserComponent,
    canActivate:[adminauthGuard]
},
{
    path:'bookupdate/:id',
    component:BookUpdateComponent,
    canActivate:[adminauthGuard]
},
{
    path:'user_dashboard',
    component:UserDashboardComponent
},
{
    path:'wishlist',
    component:WishlistComponent,
    canActivate:[authGuard]
},
{
    path:'recomended',
    component:RecomendationComponent,
    canActivate:[authGuard,adminauthGuard]
},
{
    path:'search/:queary',
    component:SearchbookComponent,
},
{
    path:'addbyuser',
    component:AddbyuserComponent,
    canActivate:[adminauthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
