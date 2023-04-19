import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bebida } from '../models/Bebida';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BebeidasService {

  constructor(private http:HttpClient) { }
  getBebidas()
  {
    return this.http.get('http://localhost:3000/api/bebidas');
  }
  getBebida(id:string)
  {
    return this.http.get('http://localhost:3000/api/bebidas/'+id);
  }
  saveBebida(bebida:Bebida)
  {
    return this.http.post('http://localhost:3000/api/bebidas',bebida);
  }
  deleteBebida(id:string)
  {
    return this.http.delete('http://localhost:3000/api/bebidas/'+id);
  }
  updateBebida(id:string | number, bebida:Bebida):Observable<Bebida>
  {
    return this.http.put('http://localhost:3000/api/bebidas/'+id,bebida);
  }
}
