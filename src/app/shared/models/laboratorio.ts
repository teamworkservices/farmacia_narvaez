export class Laboratorio {
    id!: number;
    codigo!: string;
    nombre!: string;
    descripcion!: string;
    

    public constructor(partial?: Partial<Laboratorio>) {
      Object.assign(this, partial);
    }
}