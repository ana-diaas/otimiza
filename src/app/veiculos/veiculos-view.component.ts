import { element } from 'protractor';
import { VeiculosService } from './../services/veiculos.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import * as _ from "lodash";

@Component({
  selector: 'app-veiculos-view',
  templateUrl: './veiculos-view.component.html',
  styleUrls: ['./veiculos-view.component.css'],
  providers: [VeiculosService],
})
export class VeiculosViewComponent implements OnInit {

  constructor(
    private routeParams: ActivatedRoute,
    private veiculosService: VeiculosService
  ) { }

  tipoVeiculo: any;
  idVeiculo: any;
  inscricao: Subscription;
  model: any = {}; 
  imagens: any = [];
  veiculoSalvo : any;

  ngOnInit() {

    this.inscricao = this.routeParams.params.subscribe(
        (params: any) => {

            this.idVeiculo = params['idVeiculo'];

            if(this.idVeiculo){
                console.log('this.idVeiculo fora',this.idVeiculo);

                this.veiculosService.listVeiculos().forEach(element => {
                    if(element.id == this.idVeiculo){
                        this.model = element;
                    }
                });
  
            }

    });

    this.tipoVeiculo = this.veiculosService.listTipoVeiculos();

  
  }

  veiculoForm(veiculoForm){ 

      this.veiculoSalvo = this.veiculosService.pushVeiculo(veiculoForm.value, this.imagens);
      alert('Veiculo Salvo com sucesso! Id: ' + this.veiculoSalvo.id);

  }

  imagemVeiculo($event) : void {
      this.readThisImagemVeiculo($event.target);
  }

  readThisImagemVeiculo(inputValue: any): void {

      for(var i = 0; i < inputValue.files.length; i++) {

          var file:File = inputValue.files[i];    

          // Manipular as imagens segundo necessidades da api (base 64, etc... )

          this.imagens.push(file);        
      }
   
  }


  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
