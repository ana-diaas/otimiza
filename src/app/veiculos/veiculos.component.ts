import { VeiculosService } from './../services/veiculos.services';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css'],
  providers: [VeiculosService]
})
export class VeiculosComponent implements OnInit {

  constructor(private route: Router,
              private veiculosService: VeiculosService) { }

  tipoVeiculo: any;
  veiculos: any;

  ngOnInit() {
      this.veiculos = this.veiculosService.listVeiculos();
  };

    editar(idVeiculo){
        this.route.navigate(['/veiculos-form/', idVeiculo]);
    }

    deleta(idVeiculo){
        this.veiculos = this.veiculosService.deleteVeiculo(idVeiculo);
        alert('Veículo excluído com sucesso!');
    }

    cadastra(){
        this.route.navigate(['/veiculos-form/']);
    }
      
  }   
    
      


