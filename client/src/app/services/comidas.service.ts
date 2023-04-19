import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comida } from '../models/Comidas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  constructor(private http:HttpClient) { }
  getComidas()
  {
    return this.http.get('http://localhost:3000/api/comidas');
  }
  getComida(id:string)
  {
    return this.http.get('http://localhost:3000/api/comidas/'+id);
  }
  saveComida(comida:Comida)
  {
    return this.http.post('http://localhost:3000/api/comidas',comida);
  }
  deleteComida(id:string)
  {
    return this.http.delete('http://localhost:3000/api/comidas/'+id);
  }
  updateComida(id:string | number, comida:Comida):Observable<Comida>
  {
    return this.http.put('http://localhost:3000/api/comidas/'+id,comida);
  }
}
