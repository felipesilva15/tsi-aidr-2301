import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component {
  nome: string = '';
  telefone: string = '';
  email: string = '';
  prefTelefone: boolean = false;
  prefWhatsapp: boolean = false;
  prefEmail: boolean = false;

  exibirResumo(){
    let preferencias: string = (this.prefTelefone == true ? 'Telefone ' : '') + (this.prefWhatsapp == true ? 'Whatsapp ' : '') + (this.prefEmail ? 'E-mail' : '');

    alert('Nome: ' + this.nome + '\n' + 'Telefone: ' + this.telefone + '\n' + 'E-mail: ' + this.email + '\n' + 'Preferências de contato: ' + preferencias)
  }
}
