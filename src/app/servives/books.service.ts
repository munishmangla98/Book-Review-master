import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addedbooks, books, recomendation } from '../data_type';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  constructor(private http: HttpClient){}
  

  
  toggleReviewStatus(bookId: string) {
    throw new Error('Method not implemented.');
  }
  updateBookReviews(data: books) {
    throw new Error('Method not implemented.');
  }


  bookadd(data: books) {
    return this.http.post('http://localhost:3000/books', data)
  }
  booklist(data: books) {
    return this.http.get<books[]>("http://localhost:3000/books")
  }

  addreview(addReview: books, id: string) {
    return this.http.post(`http://localhost:3000/books/${addReview.id}`, addReview)
  }

  deletebook(id: string) {
    return this.http.delete(`http://localhost:3000/books/${id}`)
  }
  
  getbook(id: string) {
    return this.http.get<books>(`http://localhost:3000/books/${id}`)
  }


  
  updated_book(data: books) {
    return this.http.put<books>(`http://localhost:3000/books/${data.id}`, data);
  }
  trending_book(data: books) {
    return this.http.get<books[]>("http://localhost:3000/books?_limit=4");
  }
  openDetails(id: string) {
    return this.http.get<books>(`http://localhost:3000/books/${id}`);
  }
  search(query: string) {
    return this.http.get<books[]>(
      `http://localhost:3000/books?Bookname=${query}`);
  }
  




    // search(query: string) {
    //   let url = `http://localhost:3000/books?`;
  
    //   if (query) {
    //     url + Bookname=${query}`;
    //   }
  
    //   if (query && url.includes('=')) {
    //     url += &BookAuthor=${query}`;
    //   } else if (query) {
    //     url = BookAuthor=${query}`;
    //   }
  
    //   if (query && url.includes('=')) {
    //     url += `&Rating=${query}`;
    //   } else if (query) {
    //     url = Rating=${query}`;
    //   }
  //   return this.http.get<books[]>(url);
  // }






  addtocart(addto: addedbooks) {
    return this.http.post('http://localhost:3000/Bookbyuser', addto)
  }

  // addlist(data: addedbooks) {
  //   return this.http.get<books[]>("http://localhost:3000/Bookbyuser?username"+localStorage.getItem('username'))
  // }


  
  addlist(data: addedbooks) {
    return this.http.get<books[]>("http://localhost:3000/Bookbyuser")
  }

  
  removefromCart(id: string) {
    return this.http.delete(`http://localhost:3000/Bookbyuser/${id}`)
  }


  
  addrecomendation(data: recomendation) {
    return this.http.post('http://localhost:3000/recomendation', data)
    console.warn(data)
  }
  recomedationbybookname(query: recomendation) {
    return this.http.get<books[]>(`http://localhost:3000/books?Bookname=${query.Bookname}`);
  }
  recomedationbybookauthor(query: recomendation) {
    return this.http.get<books[]>(`http://localhost:3000/books?BookAuthor=${query.BookAuthor}`);
  }
  recomedationbyrating(query: recomendation) {
    return this.http.get<books[]>(`http://localhost:3000/books?Rating=${query.Rating}`);
  }
  recomedationbydate(query: recomendation) {
    return this.http.get<books[]>(`http://localhost:3000/books?Dateofpublishing=${query.Dateofpublishing}`);
  }
}
