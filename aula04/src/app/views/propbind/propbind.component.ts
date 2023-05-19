import { Component } from '@angular/core';

@Component({
  selector: 'app-propbind',
  templateUrl: './propbind.component.html',
  styleUrls: ['./propbind.component.css']
})
export class PropbindComponent {
  pais: string = 'alemanha';

  trocarPais(): void{
    this.pais = this.pais == 'alemanha' ? 'brasil' : 'alemanha';
  }
}
