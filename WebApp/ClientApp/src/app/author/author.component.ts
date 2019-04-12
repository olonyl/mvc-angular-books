import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
    authors: any;
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get(`${environment.baseUrl}/api/authors`).subscribe(data => {
            this.authors = data;
        });
    }

}
