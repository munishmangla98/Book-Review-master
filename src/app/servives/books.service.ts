import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { books } from '../data_type';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }
  book(data: books) {
    return this.http.post('http://localhost:3000/books', data)
  }
  // userlogin(data: user_login) {
  //   return this.http.get(`http://localhost:3000/user_login?username=${data.username}&password=${data.password}`)
  // }


  booklist(data: books) {
    return this.http.get<books[]>("http://localhost:3000/books")
  }
  deletebook(id: string) {
    return this.http.delete(`http://localhost:3000/books/${id}`)
  }
  getbook(id:string){
    return this.http.get<books>(`http://localhost:3000/books/${id}`)
  }
  updated_book(data:books){
    return this.http.put<books>(`http://localhost:3000/books/${data.id}`,data);
  }}
