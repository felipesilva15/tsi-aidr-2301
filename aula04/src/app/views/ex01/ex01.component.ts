import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component {
  pathImg01: string = 'assets/img01.jpg';
  pathImg02: string = 'assets/img02.jpg';
  pathImg03: string = 'assets/img03.webp';

  cssImg01: string = 'img01';
  cssImg02: string = 'img02';
  cssImg03: string = 'img03';
}
