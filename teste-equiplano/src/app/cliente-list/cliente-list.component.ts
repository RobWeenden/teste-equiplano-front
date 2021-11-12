import { Router } from '@angular/router';
import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Array<Cliente[]>;
  public loading:boolean = false;
  constructor(
    private clienteService: ClienteService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.clienteService.listAll()
    .subscribe(data=>{
     this.clientes = data;
    });
  }
  getDeletarCliente(id:number, index:number){
    if (confirm('Deseja remover este Item?')) {
    this.clienteService.delete(id)
    .subscribe(data=>{
      this.clientes.splice(index, 1);
    });
  }
  }
}
