import { Component } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component {
  n1: number = 0;
  n2: number = 0;
  result: number = 0;

  calcular(operacao: string): void{
    switch (operacao) {
      case '+':
        this.result = this.n1 + this.n2;
        break;

      case '-':
        this.result = this.n1 - this.n2;
        break;

      case '*':
        this.result = this.n1 * this.n2;
        break;

      case '/':
        this.result = this.n1 / this.n2;
        break;
    
      default:
        this.result = 0;
        break;
    }
  }
}
