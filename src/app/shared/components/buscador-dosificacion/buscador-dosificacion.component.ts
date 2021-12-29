import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DosificacionService } from 'src/app/modules/inventario/services/dosificacion.service';
import { Dosificacion } from '../../models/dosificacion';


@Component({
  selector: 'app-buscador-dosificacion',
  templateUrl: './buscador-dosificacion.component.html',
  styleUrls: ['./buscador-dosificacion.component.css']
})
export class BuscadorDosificacionComponent implements OnInit {

  listaDosificacionesEncontrados: Dosificacion[];
  dosificacionForm: FormGroup;
  @Input() placeholderTitulo: string;
  @Output() dosificacionSeleccionado;
  constructor(private fb: FormBuilder,public dosificacionService: DosificacionService) { 
    this.listaDosificacionesEncontrados=[];
    this.dosificacionSeleccionado = new EventEmitter<Dosificacion>();
    this.placeholderTitulo = '';

    this.dosificacionForm = this.fb.group({
      dosificacionCtrl: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  getDosificaciones(event: Event){
    const searchParam = (event.target as HTMLInputElement).value;
    this.listaDosificacionesEncontrados = this.dosificacionService.getDosificacionesFilter(searchParam);
  }

  setDosificacionSeleccionado(dosificacion: Dosificacion){
    this.dosificacionSeleccionado.emit(dosificacion)
    this.dosificacionForm.controls['dosificacionCtrl'].setValue(dosificacion.codigo + ' - ' + dosificacion.nombre);
   }

}
