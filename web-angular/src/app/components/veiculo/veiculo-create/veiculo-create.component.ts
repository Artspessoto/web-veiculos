import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculo.module';
import { VeiculoService } from 'src/app/services/veiculo/veiculo.service';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css'],
})
export class VeiculoCreateComponent implements OnInit {
  veiculo: Veiculo;

  constructor(private router: Router, private veiculoService: VeiculoService) {
    this.veiculo = new Veiculo();
  }

  ngOnInit(): void {}

  insertVehicle(): void {
    this.veiculoService
      .post(this.veiculo)
      .pipe(take(1))
      .subscribe({
        next: (veiculo) => this.handleResponse(veiculo),
        error: (error) => this.handleResponseError(error.status),
      });
  }

  handleResponse(veiculo: Veiculo): void {
    this.veiculo = veiculo;
    this.sucessMessage();
    this.goToIndex();
  }

  handleResponseError(error: number): void {
    this.errorMessage(error);
  }

  errorMessage(error: number): void {
    let fullMessage: string = '';
    error === 400 || error === 404
      ? (fullMessage = 'Preencha os campos obrigatórios!')
      : (fullMessage = `Ocorreu um erro! \n Entre em contato com o suporte.`);
    alert(fullMessage);
  }

  sucessMessage(): void {
    alert('Veículo cadastrado com sucesso!');
  }

  backPage(): void {
    this.goToIndex();
  }

  goToIndex(): void {
    this.router.navigate(['veiculo/veiculo-index']);
  }
}
