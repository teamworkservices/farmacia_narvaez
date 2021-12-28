import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Medicamento } from 'src/app/shared/models/medicamento';

// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  medicamentoData: Medicamento[] = [
    {idMedicamento: 1, codigoCompra: 'med1', codBarra:'cod1', nombre:'medicamento1',cantidad:3, precio:'2000' },
    {idMedicamento: 2, codigoCompra: 'med2', codBarra:'cod2', nombre:'medicamento2',cantidad:4, precio:'6000' },
    {idMedicamento: 3, codigoCompra: 'med3', codBarra:'cod3', nombre:'medicamento3',cantidad:5, precio:'8000' },
    
  ];

  constructor() { }

  
  getMedicamento(): Medicamento[] {
      return this.medicamentoData;
  }

  
  agregarMedicamento(medicamento: Medicamento):Medicamento {
    medicamento.idMedicamento = this.medicamentoData.length+1;
    this.medicamentoData.push(medicamento);
    return medicamento;
  }

  editarMedicamento(medicamento: Medicamento):Medicamento{
    let indexMedicamento = this.medicamentoData.findIndex(item => item.idMedicamento == medicamento.idMedicamento);
    Object.assign(this.medicamentoData[indexMedicamento], medicamento);
    return medicamento;
  }

  eliminarMedicamento(id:number){
    this.medicamentoData = this.medicamentoData.filter(item => item.idMedicamento != id);
  }
  
}
