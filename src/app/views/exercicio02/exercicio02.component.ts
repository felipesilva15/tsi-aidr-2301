import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component {
  somar(n1: number, n2: number): number{
    return n1 + n2;
  }
}
