import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-for01',
  templateUrl: './ex-for01.component.html',
  styleUrls: ['./ex-for01.component.css']
})
export class ExFor01Component {
  filmes: Array<string> = ['Velozes e furiosos', 'Homem-Aranha', 'Batman', 'Homem-formiga', 'Vingadores'];
}
