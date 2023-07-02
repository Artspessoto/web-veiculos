export class Veiculo {
  public Id!: number;
  public Marca: string;
  public Nome: string;
  public AnoModelo: number;
  public DataFabricacao: string;
  public Valor: number;
  public Opcionais: string;

  constructor() {
    this.Marca = '';
    this.Nome = '';
    this.AnoModelo = 0;
    this.DataFabricacao = '';
    this.Valor = 0;
    this.Opcionais = '';
  }
}
