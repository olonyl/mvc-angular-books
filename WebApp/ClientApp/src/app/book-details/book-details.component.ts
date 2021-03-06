import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailsComponent implements OnInit {
  book: any = {};
  author: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get(`${environment.baseUrl}/api/books/${id}`).subscribe(data => {
      this.book = data;
      if (this.book)
        this.getAuthorName(this.book.AuthorId)
    });
  }
  getAuthorName(id) {
    this.http.get(`${environment.baseUrl}/api/authors/${id}`).subscribe(data => {
      this.author = data;
    });
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
