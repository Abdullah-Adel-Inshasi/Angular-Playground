import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import Post from './post';
@Injectable({
  providedIn: 'root',
})
export class PlaceholderService {
  private ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}
  getUsers(): Observable<{ id: number; username: string }[]> {
    return this.http.get<{ id: number; username: string }[]>(
      this.ROOT_URL + '/users'
    );
  }

  getUserPosts(id: string): Observable<Post[]> {
    const params: HttpParams = new HttpParams().set('userId', id);
    console.log(params);
    return this.http.get<Post[]>(this.ROOT_URL + `/posts`, {
      ...(id.trim() && { params }),
    });
  }
}
