import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-for05',
  templateUrl: './ex-for05.component.html',
  styleUrls: ['./ex-for05.component.css']
})
export class ExFor05Component {
  listaNomes: Array<string> = [];
  nome: string = '';

  adicionarNome(){
    if(!this.nome){
      alert('Preencha o campo com um nome!');
    }
    
    this.listaNomes.push(this.nome);
    this.nome = '';
  }
}
