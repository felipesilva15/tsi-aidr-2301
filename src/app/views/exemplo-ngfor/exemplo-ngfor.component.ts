import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ngfor',
  templateUrl: './exemplo-ngfor.component.html',
  styleUrls: ['./exemplo-ngfor.component.css']
})
export class ExemploNgforComponent {
  bichos: Array<string> = ['Girafa', 'Elefante', 'Camaleão', 'Ornitorrinco'];
}
