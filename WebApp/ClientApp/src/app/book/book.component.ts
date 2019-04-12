import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  authors: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${environment.baseUrl}/api/books`).subscribe(data => {
      this.books = data;
    });
  }
}
