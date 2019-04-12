import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditBookComponent implements OnInit {
  book: any = {};
  authors: any = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
    this.getAuthors();
  }

  getAuthors() {
    this.http.get(`${environment.baseUrl}/api/authors`).subscribe(data => {
      this.authors = data;
    });
  }

  getBookDetail(id) {
    this.http.get(`${environment.baseUrl}/api/books/${id}`).subscribe(data => {
      this.book = data;
    });
  }
  updateBook(id) {
    console.log(this.book);
    this.http.put(`${environment.baseUrl}/api/books/${id}`, this.book)
      .subscribe(res => {
        let id = res['Id'];
        this.router.navigate(['/details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }
  deleteBook(id) {
    this.http.delete(`${environment.baseUrl}/api/books/${id}`)
      .subscribe(res => {
        this.router.navigate(['/books']);
      }, (err) => {
        console.log(err);
      }
      );
  }
}
