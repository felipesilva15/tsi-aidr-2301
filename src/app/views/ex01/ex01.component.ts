import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component {
  exibir: boolean = false;

  trocarVisibilidade(): void{
    this.exibir = !this.exibir;
  }
}
