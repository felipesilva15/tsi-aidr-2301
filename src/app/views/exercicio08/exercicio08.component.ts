import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio08',
  templateUrl: './exercicio08.component.html',
  styleUrls: ['./exercicio08.component.css']
})
export class Exercicio08Component {
  corDiv: string = '';

  trocarCor(cor: string): void{
    this.corDiv = 'background-color: ' + cor;
  }
}
