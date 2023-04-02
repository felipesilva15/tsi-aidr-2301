import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-for03',
  templateUrl: './ex-for03.component.html',
  styleUrls: ['./ex-for03.component.css']
})
export class ExFor03Component {
  paises: Array<string> = ['Brasil', 'Canada', 'Suiça', 'Inglaterra'];

  exibirMensagem(pais: string){
    alert(pais);
  }
}
