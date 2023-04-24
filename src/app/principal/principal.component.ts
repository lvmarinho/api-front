import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  //Objeto tipo cliente
  cliente = new Cliente();


  // Váriavel para visibilidade dos botões
  btnCadastro: boolean = true;

  //JSON de clientes
  clientes: Cliente[] = [];

  // Construtor
  constructor(private servico: ClienteService) { }

  //Método de seleção
  selecionar(): void {
    this.servico.selecionar()
      .subscribe(retorno => this.clientes = retorno);

  }

  // Método de cadastro
  cadastrar(): void {
    this.servico.cadastrar(this.cliente)
      .subscribe(retorno => {

        //Cadastrar o cliente no vetor
        this.clientes.push(retorno);

        //Limpar formulário
        this.cliente = new Cliente();

        //Mensagem
        alert('Cliente cadastrado com sucesso!');

      });

  }

  // Método de inicialização
  ngOnInit() {
    this.selecionar();

  }



}



