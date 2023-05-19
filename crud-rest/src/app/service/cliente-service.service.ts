import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }

  urlBase: string = 'http://localhost:3000/cliente';

  // GET
  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlBase);
  }

  // POST
  inserir(cliente:Cliente){
    return this.http.post<Cliente>(this.urlBase, cliente);
  }

  // PUT
  atualizar(cliente: Cliente){
    return this.http.put<Cliente>(`${this.urlBase}/${cliente.id}`, cliente);
  }

  // DELETE
  excluir(id: number){
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}