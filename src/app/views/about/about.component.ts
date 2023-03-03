import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  nome: string = 'Felipe Silva';
  semestre: string = '3º Semestre';
  imagem: string = 'assets/chart.png'

  somar(n1: number, n2: number): number{
    return n1 + n2;
  }
}
