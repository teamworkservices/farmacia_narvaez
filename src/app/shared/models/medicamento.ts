export class Medicamento {
    idMedicamento!: number;
    codigoCompra!: string;
    codBarra!: string;
    nombre!: string;
    cantidad!: number;
    precio!:string;
    dosificacion!:string;
    
    public constructor(partial?: Partial<Medicamento>) {
      Object.assign(this, partial);
    }
}