import { RespostaApoliceDTO } from './../models/resposta-apoliceDTO';
import { RespostaApoliceDTOService } from './../service/resposta-apoliceDTO.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apolice } from '../models/apolice';
import { ApoliceService } from '../service/apolice.service';

@Component({
  selector: 'app-apolice-list',
  templateUrl: './apolice-list.component.html',
  styleUrls: ['./apolice-list.component.css']
})
export class ApoliceListComponent implements OnInit {

  apolices: Array<Apolice[]>;
  numApolice=null;
  apoliceBusca:  RespostaApoliceDTO;

  constructor(
    private apoliceService:ApoliceService,
    private  apoliceDTOService: RespostaApoliceDTOService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.getApolices();
  }

  getApolices(){
    this.apoliceService.listAll()
    .subscribe(data=>{
     this.apolices = data;
     console.log(this.apolices)
    });
  }
  getDeletarApolice(id:number, index:number){
    if (confirm('Deseja remover este Item?')) {
    this.apoliceService.delete(id)
    .subscribe(data=>{
      this.apolices.splice(index, 1);
    });
  }
  }

  getBuscarNumeroApolice(){
    if(this.numApolice !== ''){
        this.router.navigateByUrl('consulta/apolice/'+this.numApolice)

  }
}

}
