import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medicamento } from 'src/app/shared/models/medicamento';
import Swal from 'sweetalert2';
import { DosificacionService } from '../../../services/dosificacion.service';
import { MedicamentoService } from '../../../services/medicamento.service';


@Component({
  selector: 'app-editar-medicamento',
  templateUrl: './editar-medicamento.component.html',
  styleUrls: ['./editar-medicamento.component.css']
})
export class EditarMedicamentoComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private medicamentoService: MedicamentoService,
              public dialogRef: MatDialogRef<EditarMedicamentoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Medicamento) {
              
    this.form = this.fb.group({
      codigoCompraCtrl: ['', [Validators.required, Validators.maxLength(3)]],
      codigoBarraCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      nombreCtrl:['', [Validators.required, Validators.maxLength(20)]],
      cantidadCtrl:['', [Validators.required, Validators.maxLength(20)]],
      precioCtrl:['', [Validators.required, Validators.maxLength(20)]],
    })

    console.log(data);
  }

  ngOnInit(): void {
  }

  editarMedicamento(){
    if (this.form.valid) {
      let medicamento = new Medicamento();
      medicamento.idMedicamento = this.data.idMedicamento;
      medicamento.codBarra = this.form.value['codigoBarraCtrl'];
      medicamento.nombre = this.form.value['nombreCtrl'];
      medicamento.cantidad = this.form.value['cantidadCtrl'];
      medicamento.precio = this.form.value['precioCtrl'];

      Object.assign(medicamento, this.medicamentoService.editarMedicamento(medicamento));
      this.dialogRef.close(medicamento);
    }
  }

  confirmModal(){
    Swal.fire({
      title: 'Correcto',
      text: 'Dosificación actualizada exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
