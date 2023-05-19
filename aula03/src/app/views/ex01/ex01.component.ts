import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component {
  nome: string = 'Felipe';
  sobrenome: string = 'Silva';

  @Input() autores: Array<{nome: string, idade: number}> = [{nome: "", idade: 0}];
}
