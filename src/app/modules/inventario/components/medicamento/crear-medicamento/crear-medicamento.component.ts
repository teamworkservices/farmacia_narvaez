import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { Medicamento } from 'src/app/shared/models/medicamento';
import Swal from 'sweetalert2';
import { DosificacionService } from '../../../services/dosificacion.service';
import { MedicamentoService } from '../../../services/medicamento.service';
//import { MedicamentoService } from '../../../services/medicamento.service';



@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.css']
})
export class CrearMedicamentoComponent implements OnInit {

  form: FormGroup;
  nombresDosificaciones: string[] = [];


  constructor(private fb: FormBuilder, 
              private medicamentoService: MedicamentoService,
              private dosificacionService: DosificacionService,
              public dialogRef: MatDialogRef<CrearMedicamentoComponent>) {

    this.form = this.fb.group({
      codigoCompraCtrl: ['', [Validators.required, Validators.maxLength(3)]],
      codigoBarraCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      nombreCtrl:['', [Validators.required, Validators.maxLength(20)]],
      cantidadCtrl:['', [Validators.required, Validators.maxLength(20)]],
      precioCtrl:['', [Validators.required, Validators.maxLength(20)]],
      dosificacionCtrl: ['', [Validators.required, Validators.maxLength(20)]],

    })
  }

  ngOnInit(): void {
    this.getDosificaciones();
  }

  agregarMedicamento(){
    if (this.form.valid) {
      let medicamento = new Medicamento();
    
      medicamento.codigoCompra = this.form.value['codigoCompraCtrl'];
      medicamento.codBarra= this.form.value['codigoBarraCtrl'];
      medicamento.nombre= this.form.value['nombreCtrl'];
      medicamento.cantidad = this.form.value['cantidadCtrl'];
      medicamento.precio = this.form.value['precioCtrl'];
      medicamento.dosificacion = this.form.value['dosificacionCtrl'];

      medicamento = this.medicamentoService.agregarMedicamento(medicamento);
      this.dialogRef.close(medicamento);
    }
  }

  getDosificaciones(){

    let dosificaciones: Dosificacion[] = [];
    dosificaciones = this.dosificacionService.getDosificaciones();

    dosificaciones.forEach(({nombre}) => {
      this.nombresDosificaciones.push(nombre);
    });

  }
  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Medicamento agregado exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
