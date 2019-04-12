import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AuthorComponent } from './author/author.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

const appRoutes: Routes = [
  {
    path: 'details/:id',
    component: BookDetailsComponent,
    data: { title: 'Book Details' }
  },
  {
    path: '',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'create',
    component: AddBookComponent,
    data: { title: 'Add Book' }
  },
  {
    path: 'edit/:id',
    component: EditBookComponent,
    data: { title: 'Edit Book' }
  },
  {
    path: 'authors',
    component: AuthorComponent,
    data: { title: 'Author List' }
  },
  {
    path: 'author/create',
    component: AddAuthorComponent,
    data: { title: 'Add Author' }
  },
  {
    path: 'author/details/:id',
    component: AuthorDetailsComponent,
    data: { title: 'Author Details' }
  },
  {
    path: 'author/edit/:id',
    component: EditAuthorComponent,
    data: { title: 'Edit Author' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailsComponent,
    AddBookComponent,
    EditBookComponent,
    AuthorComponent,
    AddAuthorComponent,
    AuthorDetailsComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
