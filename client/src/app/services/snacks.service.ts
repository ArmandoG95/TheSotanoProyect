import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Snack } from '../models/Snacks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {

  constructor(private http:HttpClient) { }
  getSnacks()
  {
    return this.http.get('http://localhost:3000/api/snacks');
  }
  getSnack(id:string)
  {
    return this.http.get('http://localhost:3000/api/snacks/'+id);
  }
  saveSnack(snack:Snack)
  {
    return this.http.post('http://localhost:3000/api/snacks',snack);
  }
  deleteSnack(id:string)
  {
    return this.http.delete('http://localhost:3000/api/snacks/'+id);
  }
  updateSnack(id:string | number, snack:Snack):Observable<Snack>
  {
    return this.http.put('http://localhost:3000/api/snacks/'+id,snack);
  }
}
