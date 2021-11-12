import { RespostaApoliceDTO } from './../models/resposta-apoliceDTO';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespostaApoliceDTOService } from '../service/resposta-apoliceDTO.service';

@Component({
  selector: 'app-apolice-rest',
  templateUrl: './apolice-rest.component.html',
  styleUrls: ['./apolice-rest.component.css']
})
export class ApoliceRestComponent implements OnInit {

  public restApolice= new RespostaApoliceDTO();
  public numeroApolice = null;
  public mensagemVencimento = null;
  public placaVeiculo = null;
  public qtdVencimento = null;
  public valorApolice = null;

  constructor(
    private apoliceDTOService: RespostaApoliceDTOService,
    private  router: Router,
    private routerActive: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.numeroApolice = this.routerActive.snapshot.paramMap.get('numero');
    this.getBuscarNumeroApolice();
  }


  getBuscarNumeroApolice(){
    if(this.numeroApolice !== ''){
      this.apoliceDTOService.read(this.numeroApolice)
      .subscribe(data =>{
        this.mensagemVencimento = data.mensagemVencimento
        this.valorApolice = data.valorApolice
        this.placaVeiculo = data.placaVeiculo
        this.qtdVencimento = data.qtdVencimento

      });
    }
  }
}
