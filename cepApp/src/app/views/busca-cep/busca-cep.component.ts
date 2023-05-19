import { Endereco } from '../../models/endereco';
import { CepService } from './../../services/cep.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent {
  constructor(private cepService: CepService) { }

  endereco?: Endereco = undefined;
  cep: string = '';

  buscarCep(){
    if(!this.cep){
      alert('CEP inválido!');
      return;
    }

    this.cepService.obterEndereco(this.cep)
      .subscribe(
        (res) => {
          if(res.cep){
            this.endereco = res;
          } else{
            this.endereco = undefined;
            alert('CEP não encontrado!');
          }
        },
        (err) => {
          this.endereco = undefined;
          alert('Erro ao buscar CEP!');
        })
  }
}
