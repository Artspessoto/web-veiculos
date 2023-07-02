import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculo.module';
import { VeiculoService } from 'src/app/services/veiculo/veiculo.service';

@Component({
  selector: 'app-veiculo-index',
  templateUrl: './veiculo-index.component.html',
  styleUrls: ['./veiculo-index.component.css'],
})
export class VeiculoIndexComponent implements OnInit {
  idSearch: string;
  veiculos: Veiculo[];

  constructor(private router: Router, private veiculoService: VeiculoService) {
    this.idSearch = '';
    this.veiculos = new Array<Veiculo>();
  }

  ngOnInit(): void {}

  getAllVehicles(): void {
    this.veiculoService
      .getAll()
      .pipe(take(1))
      .subscribe({
        next: (veiculos) => this.handleResponseAll(veiculos),
        error: (error) => this.handleResponseError(error.status),
      });
  }

  get(): void {
    this.veiculos = [];
    this.idSearch === ''
      ? this.getAllVehicles()
      : this.getById(Number(this.idSearch));
  }

  getById(id: number): void {
    this.veiculoService
      .getId(id)
      .pipe(take(1))
      .subscribe({
        next: (veiculo) => this.handleResponseVehicle(veiculo),
        error: (error) => this.handleResponseError(error.status),
      });
  }

  handleResponseAll(veiculos: Veiculo[]): void {
    this.veiculos = veiculos;
  }

  handleResponseVehicle(veiculo: Veiculo): void {
    this.veiculos.push(veiculo);
  }

  handleResponseError(error: number): void {
    this.errorMessage(error);
  }

  errorMessage(error: number): void {
    let messageError: string = '';
    error === 404 || error === 400
      ? (messageError = 'Veículo não encontrado')
      : (messageError = `Ocorreu um erro! \n Entre em contato com o suporte.`);

    alert(messageError);
  }

  newVehicle(): void {
    this.router.navigate(['veiculo/veiculo-create']);
  }

  edit(id: number): void {
    this.router.navigate(['veiculo/veiculo-edit', id]);
  }

  deleteConfirm(id: number): void {
    if (confirm('Deseja excluir o veículo?')) this.deleteVehicle(id);
  }

  deleteVehicle(id: number): void {
    this.veiculoService
      .delete(id)
      .pipe(take(1))
      .subscribe({
        next: () => this.get(),
        error: (error) => this.handleResponseError(error.status),
      });
  }

  formatDate(date: string) {
    let formatDate = new Date(date.split('T')[0]);
    return formatDate.toLocaleDateString('pt-br');
  }
}
