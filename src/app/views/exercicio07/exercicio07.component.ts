import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio07',
  templateUrl: './exercicio07.component.html',
  styleUrls: ['./exercicio07.component.css']
})
export class Exercicio07Component {
  corDiv: string = '';

  trocarCor(cor: string): void{
    this.corDiv = 'background-color: ' + cor;
  }
}
