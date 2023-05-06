import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Endereco } from '../models/endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  obterEndereco(cep: string): Observable<Endereco>{
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json`);
  }
}
