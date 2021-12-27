import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Medicamento } from 'src/app/shared/models/medicamento';
import Swal from 'sweetalert2';
import { MedicamentoService } from '../../../services/medicamento.service ';

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.css']
})
export class CrearMedicamentoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private medicamentoService: MedicamentoService,
              public dialogRef: MatDialogRef<CrearMedicamentoComponent>) {

    this.form = this.fb.group({
      codigoCompraCtrl: ['', [Validators.required, Validators.maxLength(3)]],
      codigoBarraCtrl: ['', [Validators.required, Validators.maxLength(20)]],
      nombre:['', [Validators.required, Validators.maxLength(20)]],
      cantidad:['', [Validators.required, Validators.maxLength(20)]],
      precio:['', [Validators.required, Validators.maxLength(20)]],


    })
  }

  ngOnInit(): void {
  }

  agregarMedicamento(){
    if (this.form.valid) {
      let medicamento = new Medicamento();
      // dosificacion.codigo = this.form.value['codigoCtrl'];
      // dosificacion.nombre = this.form.value['nombreCtrl'];
      

      medicamento = this.medicamentoService.agregarMedicamento(medicamento);
      this.dialogRef.close(medicamento);
    }
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
