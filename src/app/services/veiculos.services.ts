import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class VeiculosService {

  constructor() {
    }

    private veiculos = [

          {
            id:1,
            placa: "ABC-0000",
            tipo_veiculo: 1,
            proprietario: "José Silva", 
            imagem:'./assets/imagens/motocicleta.jpg'
          },
          {
            id:2,
            placa: "ABC-1111",
            tipo_veiculo: 2,
            proprietario: "José Silva",
            imagem:'./assets/imagens/automovel.jpg' 
          },
          {
            id:3,
            placa: "ABC-2222",
            tipo_veiculo: 3,
            proprietario: "José Silva", 
            imagem:'./assets/imagens/microonibus.jpg' 
          },
          {
            id:4,
            placa: "ABC-3333",
            tipo_veiculo: 4,
            proprietario: "José Silva", 
            imagem:'./assets/imagens/onibus.jpg' 
          },
          {
            id:5,
            placa: "ABC-4444",
            tipo_veiculo: 5,
            proprietario: "José Silva", 
            imagem:'./assets/imagens/caminhao.jpg'
          },
          {
            id:6,
            placa: "ABC-5555",
            tipo_veiculo: 6,
            proprietario: "José Silva",
            imagem:'./assets/imagens/caminhao-trator.jpg' 
          },
          {
            id:7,
            placa: "ABC-6666",
            tipo_veiculo: 7,
            proprietario: "José Silva",
            imagem:'./assets/imagens/caminhonete.png'  
          },
                    
      ];

        private tipoVeiculo = [

            {id: 1, tipo: "Motocicleta"},
            {id: 2, tipo: "Automóvel"},
            {id: 3, tipo: "Microônibus"},
            {id: 4, tipo: "Ônibus"},
            {id: 5, tipo: "Caminhão"},
            {id: 6, tipo: "Caminhão-Trator"},
            {id: 7, tipo: "Caminhonete"},

      ];

  
    // /1/cooperativa/3/associado

  listVeiculos(){
        return this.veiculos; 
  }

  listTipoVeiculos(){
        return this.tipoVeiculo; 
  }

  pushVeiculo(veiculoForm, imagens){
      veiculoForm.id = this.veiculos.length + 1; 
      this.veiculos.push(veiculoForm);
      return this.veiculos[this.veiculos.length - 1];
  }

  deleteVeiculo(idVeiculo){
      
      for(let i = 0; i < this.veiculos.length; i++){
          if(this.veiculos[i].id == idVeiculo){
              this.veiculos.splice(i, 1);
              console.log('this.veiculos',this.veiculos);
              return this.veiculos;
          }
      }
  }

}
