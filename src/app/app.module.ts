import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { BookReadComponent } from './book-read/book-read.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookRetriveComponent } from './book-retrive/book-retrive.component';
import { UsersComponent } from './users/users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserBookPageComponent } from './user-book-page/user-book-page.component';
import { GuestComponent } from './guest/guest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { SearchbookComponent } from './searchbook/searchbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookComponent,
    BookReadComponent,
    ContactUsComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    BookUpdateComponent,
    BookAddComponent,
    BookRetriveComponent,
    UsersComponent,
    UpdateuserComponent,
    UserDashboardComponent,
    HomeComponent,
    UserBookPageComponent,
    GuestComponent,
    BookDetailComponent,
    UserAuthComponent,
    WishlistComponent,
    RecomendationComponent,
    SearchbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
