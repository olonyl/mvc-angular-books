import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditAuthorComponent implements OnInit {
  author: any = {};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAuthorDetail(this.route.snapshot.params['id']);
  }

  getAuthorDetail(id) {
    this.http.get(`${environment.baseUrl}/api/authors/${id}`).subscribe(data => {
      this.author = data;
    });
  }
  updateAuthor(id) {
    this.http.put(`${environment.baseUrl}/api/authors/${id}`, this.author)
      .subscribe(res => {
        console.log(res);
        //   let id = res['Id'];
        this.router.navigate(['/author/details', this.author.Id]);
      }, (err) => {
        console.log(err);
      }
      );
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
