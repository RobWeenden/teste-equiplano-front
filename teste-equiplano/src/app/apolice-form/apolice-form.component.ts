import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Apolice } from '../models/apolice';
import { ApoliceService } from '../service/apolice.service';
import { FormataData } from './formataData.component';
import { FormataDataAdapter } from './formataDataAdapter.component';

@Component({
  selector: 'app-apolice-form',
  templateUrl: './apolice-form.component.html',
  styleUrls: ['./apolice-form.component.css'],
  providers:[{provide: NgbDateParserFormatter, useClass: FormataData}, {provide: NgbDateAdapter, useClass: FormataDataAdapter}]

})
export class ApoliceFormComponent implements OnInit {
  public  apolice  = new Apolice();
  public idApolice = null;

  constructor(
    private apoliceService: ApoliceService,
    private  router: Router,
    private routerActive: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idApolice = this.routerActive.snapshot.paramMap.get('id');
    if(this.idApolice != null){
      this.getBuscarApolice(this.idApolice);
    }
  }

  getBuscarApolice(id: any){
    this.apoliceService.read(id)
    .subscribe(data=>{
      this.apolice = data;
    });
  }
  getSalvarApolice(){

    if(this.apolice.id != null && this.apolice.id.toString().trim() != null){
      this.apoliceService.update(this.apolice)
      .subscribe(data=>{
        this.router.navigateByUrl('/apolice/lista')
      });
    }else{
    this.apoliceService.create(this.apolice)
    .subscribe(data =>{
      this.router.navigateByUrl('/apolice/lista')
    });
  }
}
}
