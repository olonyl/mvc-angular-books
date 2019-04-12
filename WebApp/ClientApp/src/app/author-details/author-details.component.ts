import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorDetailsComponent implements OnInit {
  author: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getAuthorDetail(this.route.snapshot.params['id']);
  }

  getAuthorDetail(id) {
    this.http.get(`${environment.baseUrl}/api/authors/${id}`).subscribe(data => {
      this.author = data;
    });
  }

  deleteAuthor(id) {
    this.http.delete(`${environment.baseUrl}/api/authors/${id}`)
      .subscribe(res => {
        this.router.navigate(['/authors']);
      }, (err) => {
        console.log(err);
      }
      );
  }

}
