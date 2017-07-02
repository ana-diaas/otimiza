import { VeiculosViewComponent } from './veiculos/veiculos-view.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  { path: 'dashboard', 
  component: VeiculosComponent },

  { path: 'veiculos-form', 
  component: VeiculosViewComponent },

  { path: 'veiculos-form/:idVeiculo', 
  component: VeiculosViewComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


