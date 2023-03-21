import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) { }
  saveComment(comment: any):Observable<Comment>{
    return this.http.post<Comment>('http://localhost:8080/m/comment',comment);
  }
  findCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>('http://localhost:8080/m/comment/' + id);
  }

  averageScore(id: number): Observable<number>{
    return this.http.get<number>("http://localhost:8080/m/score/" + id);
  }
  starsScore(id: number): Observable<number>{
    return this.http.get<number>("http://localhost:8080/m/stars/" + id);
  }
  countComment(id: number): Observable<number>{
    return this.http.get<number>("http://localhost:8080/m/countComment/" + id);
  }
}
