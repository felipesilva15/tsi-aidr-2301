import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio09',
  templateUrl: './exercicio09.component.html',
  styleUrls: ['./exercicio09.component.css']
})
export class Exercicio09Component {
  classeCss: string = 'preto';

  trocarCor(){
    this.classeCss = this.classeCss == 'preto' ? 'vermelho' : 'preto';
  }
}
