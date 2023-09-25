import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = environment.baseApiUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  findById(id: any): Observable<Todo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Todo>(url);
  }

  findAll(): Observable<Todo[]> {
      return this.http.get<Todo[]>(this.baseUrl)
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  delete(id: any):Observable<void> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }

  update(todo: Todo) : Observable<Todo> {
    const url = `${this.baseUrl}/${todo.id}`
    return this.http.put<Todo>(url, todo);
  }

  message(msg: String) {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
    console.log('service00')

  }

}
