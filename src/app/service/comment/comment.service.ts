import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/model/Comment';

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
}
