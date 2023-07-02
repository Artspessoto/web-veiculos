import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoService } from 'src/app/services/veiculo/veiculo.service';
import { Veiculo } from 'src/app/models/veiculo.module';

@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.css'],
})
export class VeiculoEditComponent implements OnInit {
  veiculo: Veiculo;
  constructor(
    private router: Router,
    private activedRouter: ActivatedRoute,
    private veiculoService: VeiculoService
  ) {
    this.veiculo = new Veiculo();
    this.getById(this.getIdVehicle());
  }

  ngOnInit(): void {}

  getIdVehicle(): number {
    return Number(this.activedRouter.snapshot.paramMap.get('id'));
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

  handleResponseVehicle(veiculo: Veiculo): void {
    this.veiculo = veiculo;
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

  confirmUpdate(id: number): void {
    if (confirm('Deseja realizar as alterações no veículo?')) {
      this.updateVehicle(id);
      this.goToIndex();
    }
  }

  updateVehicle(id: number): void {
    this.veiculoService
      .put(id, this.veiculo)
      .pipe(take(1))
      .subscribe({
        next: (veiculo) => this.handlePutResponse(veiculo),
        error: (error) => this.handleResponseError(error.status),
      });
  }

  handlePutResponse(veiculo: Veiculo): void {
    alert(`Veículo ${veiculo.Nome} alterado com sucesso!`);
  }

  backPage(): void {
    this.goToIndex();
  }

  goToIndex(): void {
    this.router.navigate(['veiculo/veiculo-index']);
  }
}
