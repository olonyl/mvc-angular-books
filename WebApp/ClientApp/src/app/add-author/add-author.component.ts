import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddAuthorComponent implements OnInit {
  author: any = {};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  createAuthor() {
    this.http.post(`${environment.baseUrl}/api/authors`, this.author)
      .subscribe(res => {
        let id = res['Id'];
        this.router.navigate(['/author/details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

}
