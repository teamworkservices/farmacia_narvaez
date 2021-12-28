import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Medicamento } from 'src/app/shared/models/medicamento';
import Swal from 'sweetalert2';
import { MedicamentoService } from '../../services/medicamento.service';
//import { MedicamentoService } from '../../services/medicamento.service';
import { CrearMedicamentoComponent } from './crear-medicamento/crear-medicamento.component';
import { EditarMedicamentoComponent } from './editar-medicamento/editar-medicamento.component';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {

  medicamentoData: Medicamento[] = [];
  displayedColumns: string[] = ['idMedicamento', 'codigoCompra','codBarra','nombre', 'cantidad','precio' ,'acciones'];
  
  dataSource!: MatTableDataSource<Medicamento>
  
  constructor(public dialog: MatDialog, public medicamentoService:MedicamentoService) {
    
  }

  ngOnInit(): void {
    this.loadMedicamento();
  }

  openCreateDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50%";
    dialogConfig.panelClass = 'dialog-custom'
    const dialogRef = this.dialog.open(CrearMedicamentoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.loadMedicamento();
        this.loadTableMedicamento();
      }
    });
  }

  openEditDialog(medicamento: Medicamento){
    
    const dialogRef = this.dialog.open(EditarMedicamentoComponent, {
      width: "50%",
      data: medicamento,
      panelClass: 'dialog-custom'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.loadMedicamento();
        this.loadTableMedicamento();
      }
    });
  }

  loadMedicamento(){
     return this.medicamentoService.getMedicamento(); 
  }

  loadTableMedicamento(){
    this.dataSource = new MatTableDataSource<Medicamento>([]);
    this.dataSource.data = this.loadMedicamento();
  }

  eliminarMedicamento(medicamento: Medicamento){

    Swal.fire({
      title: '¿Deseas eliminar el medicamento?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.medicamentoService.eliminarMedicamento(medicamento.idMedicamento);
        this.loadTableMedicamento();
        Swal.fire('Saved!', '', 'success')
      }
    })

  }
}

