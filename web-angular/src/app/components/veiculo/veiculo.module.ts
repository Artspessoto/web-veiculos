import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoIndexComponent } from './veiculo-index/veiculo-index.component';
import { VeiculoCreateComponent } from './veiculo-create/veiculo-create.component';
import { VeiculoEditComponent } from './veiculo-edit/veiculo-edit.component';
import { FormsModule } from '@angular/forms';
import { VeiculoRoutingModule } from './veiculo-routing.module';


@NgModule({
  declarations: [VeiculoIndexComponent, VeiculoCreateComponent, VeiculoEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    VeiculoRoutingModule
  ]
})
export class VeiculoModule { }
