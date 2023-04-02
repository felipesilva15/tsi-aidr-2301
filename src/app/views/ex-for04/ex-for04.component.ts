import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-for04',
  templateUrl: './ex-for04.component.html',
  styleUrls: ['./ex-for04.component.css']
})
export class ExFor04Component {
  titulos: Array<string> = ['Comida saudável', 'Exercícios físicos', 'Tecnologia'];
  posts: Array<string> = [
    'Coma comidas saudáveis para que você tenha uma boa saúde e possa viver de forma próspera.',
    'Pratique exercícios físicos regularmente para que possa se manter em forma e não se tornar uma pessoa com problemas físicos.',
    'Entre para a area de tecnologia e desfrute de diversos benefícios e liberdade profissional.'
  ]
}
