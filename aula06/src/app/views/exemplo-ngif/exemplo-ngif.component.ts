import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ngif',
  templateUrl: './exemplo-ngif.component.html',
  styleUrls: ['./exemplo-ngif.component.css']
})
export class ExemploNgifComponent {
  ativado: boolean = false;
  nome: string = '';

  toogle(): void{
    this.ativado = !this.ativado;
  }
}
