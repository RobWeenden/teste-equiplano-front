import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  public  cliente  = new Cliente();
  public idCliente = null;
  constructor(
    private clienteService: ClienteService,
    private  router: Router,
    private routerActive: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idCliente = this.routerActive.snapshot.paramMap.get('id');
    if(this.idCliente != null){
      this.getBuscarCliente(this.idCliente);
    }
  }

  getBuscarCliente(id: any){
    this.clienteService.read(id)
    .subscribe(data=>{
      this.cliente = data;
    });
  }
  getSalvarCliente(){

    if(this.cliente.id != null && this.cliente.id.toString().trim() != null){
      this.clienteService.update(this.cliente)
      .subscribe(data=>{
        this.router.navigateByUrl('/cliente/lista')
      });
    }else{
    this.clienteService.create(this.cliente)
    .subscribe(data =>{
      this.router.navigateByUrl('/cliente/lista')
    });
  }
}

}
