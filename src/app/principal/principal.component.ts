import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  // Váriavel para visibilidade dos botões
   btnCadastro: boolean= true;

   //JSON de clientes
   clientes:Cliente[] = [];

   // Construtor
   constructor(private servico:ClienteService){}

   //Método de seleção
   selecionar():void{
      this.servico.selecionar()
      .subscribe(retorno => this.clientes = retorno);

   } 

   // Método de inicialização
   ngOnInit(){
     this.selecionar();

   }


  
}



