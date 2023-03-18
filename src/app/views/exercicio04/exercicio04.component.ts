import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component {
  caminhoImagem: string = '';

  trocarImagem(dog: string){
    this.caminhoImagem = 'assets/'+ dog + '.png'
  }
}
