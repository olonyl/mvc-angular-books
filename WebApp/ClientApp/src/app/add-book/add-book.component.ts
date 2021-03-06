import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddBookComponent implements OnInit {
  book: any = {};
  authors: any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.http.get(`${environment.baseUrl}/api/authors`).subscribe(data => {
      this.authors = data;
    });
  }

  createBook() {
    this.http.post(`${environment.baseUrl}/api/books`, this.book)
      .subscribe(res => {
        let id = res['Id'];
        this.router.navigate(['/details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

}
