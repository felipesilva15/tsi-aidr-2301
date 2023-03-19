import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.css']
})
export class Exercicio01Component {
  nome: string = '';

  exibirNome(): void{
    alert(this.nome);
  }
}
