import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.css']
})
export class Exercicio03Component {
  classeCss: string = 'vermelho';

  trocarClasse(){
    this.classeCss = this.classeCss == 'vermelho' ? 'azul' : 'vermelho';
  }
}
