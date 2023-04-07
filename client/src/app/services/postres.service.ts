import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postre } from '../models/Postres';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostresService {

  constructor(private http:HttpClient) { }
  getPostres()
  {
    return this.http.get('http://localhost:3000/api/postres');
  }
  getPostre(id:string)
  {
    return this.http.get('http://localhost:3000/api/postres/${id}');
  }
  savePostre(postre:Postre)
  {
    return this.http.post('http://localhost:3000/api/postres',postre);
  }
  deletePostre(id:string)
  {
    return this.http.delete('http://localhost:3000/api/postres/${id}');
  }
  updatePostre(id:string, postre:Postre):Observable<Postre>
  {
    return this.http.put('http://localhost:3000/api/postres/${id}',postre);
  }
}
