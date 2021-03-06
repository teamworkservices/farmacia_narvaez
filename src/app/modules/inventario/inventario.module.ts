import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';
import {SharedModule} from '../../shared/shared.module';
import { CrearDosificacionComponent } from './components/dosificacion/crear-dosificacion/crear-dosificacion.component';
import { EditarDosificacionComponent } from './components/dosificacion/editar-dosificacion/editar-dosificacion.component';
import { CrearLaboratorioComponent } from './components/laboratorio/crear-laboratorio/crear-laboratorio.component';
import { EditarLaboratorioComponent } from './components/laboratorio/editar-laboratorio/editar-laboratorio.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { CrearMedicamentoComponent } from './components/medicamento/crear-medicamento/crear-medicamento.component';
import { EditarMedicamentoComponent } from './components/medicamento/editar-medicamento/editar-medicamento.component';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';

//import { CrearDosificacionComponent } from './components/dosificacion/crear-dosificacion/crear-dosificacion.component'

@NgModule({
  declarations: [
    DosificacionComponent,
    CrearDosificacionComponent,
    EditarDosificacionComponent,
    CrearLaboratorioComponent,
    EditarLaboratorioComponent,
    LaboratorioComponent,
    CrearMedicamentoComponent,
    EditarMedicamentoComponent,
    MedicamentoComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule
    
  ]
})
export class InventarioModule { }
