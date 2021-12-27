import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Laboratorio } from 'src/app/shared/models/laboratorio';
// import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  dosificacionData: Laboratorio[] = [
    {id: 1, nombre: 'Lab1', descripcion: 'Descripcion1', codigo: '123'},
    {id: 2, nombre: 'Lab2', descripcion: 'Descripcion1', codigo: '456'},
    {id: 3, nombre: 'Lab3', descripcion: 'Descripcion1', codigo: '156'},
  ];

  constructor() { }

  
  getDosificaciones(): Laboratorio[] {
      return this.dosificacionData;
  }

  
  agregarLaboratorio(laboratorio: Laboratorio):Laboratorio {
    laboratorio.id = this.dosificacionData.length+1;
    this.dosificacionData.push(laboratorio);
    return laboratorio;
  }

  editarLaboratorio(laboratorio: Laboratorio):Laboratorio{
    let indexDosificacion = this.dosificacionData.findIndex(item => item.id == laboratorio.id);
    Object.assign(this.dosificacionData[indexDosificacion], laboratorio);
    return laboratorio;
  }

  eliminarLaboratorio(id:number){
    this.dosificacionData = this.dosificacionData.filter(item => item.id != id);
  }
  
}
