import { Component } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente-service.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  constructor(private clienteService: ClienteService) { }

  listaCliente: Array<Cliente> = [];
  cliente: Cliente = new Cliente();
  estaEditando: boolean = false;

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.clienteService.listar()
      .subscribe(
        (res) => {
          this.listaCliente = res;
        },
        (err) => {
          console.error(err);
        }
      );
  }

  // obter(): void {
  //   if(!this.idClienteAtualizar || this.idClienteAtualizar == 0) {
  //     this.clienteAtt = new Cliente();
  //     return;
  //   }

  //   this.clienteService.obter(this.idClienteAtualizar)
  //     .subscribe(
  //       (res) => {
  //         this.clienteAtt = res;
  //       },
  //       (err) => {
  //         alert('Ocorreu um erro. Tente novamente mais tarde.');
  //         console.error(err);
  //       }
  //     );
  // }

  inserir(): void {
    if(!this.cliente.nome) {
      alert('Preencha o campo de nome!');
      return;
    } else if(!this.cliente.cpf) {
      alert('Preencha o campo de CPF!');
      return;
    }

    this.clienteService.inserir(this.cliente)
      .subscribe(
        (res) => {
          this.listar();
        },
        (err) => {
          alert('Ocorreu um erro. Tente novamente mais tarde.');
          console.error(err);
        },
        () => {
          this.cliente = new Cliente();
        }
      );
  }

  excluir(id: number): void {
    if(!id) {
      alert('Cliente inválido!');
      return;
    }

    this.clienteService.excluir(id)
      .subscribe(
        (res) => {
          this.listar();
        },
        (err) => {
          alert('Ocorreu um erro. Tente novamente mais tarde.');
          console.error(err);
        }
      );
  }

  atualizar(): void {
    if(!this.cliente.id) {
      alert('Selecione um cliente!');
      return;
    } else if(!this.cliente.nome) {
      alert('Preencha o campo de nome!');
      return;
    } else if(!this.cliente.cpf) {
      alert('Preencha o campo de CPF!');
      return;
    }

    this.clienteService.atualizar(this.cliente)
      .subscribe(
        (res) => {
          this.listar();
        },
        (err) => {
          alert('Ocorreu um erro. Tente novamente mais tarde.');
          console.error(err);
        },
        () => {
          this.cancelar();
        }
      );
  }

  salvar(): void {
    if(this.estaEditando) {
      this.atualizar();
    } else {
      this.inserir();
    }
  }

  selecionar(cliente: Cliente): void {
    this.cliente.id = cliente.id;
    this.cliente.nome = cliente.nome;
    this.cliente.cpf = cliente.cpf;
    this.estaEditando = true;
  }

  cancelar(): void {
    this.cliente = new Cliente();
    this.estaEditando = false;
  }

  formatarCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}
