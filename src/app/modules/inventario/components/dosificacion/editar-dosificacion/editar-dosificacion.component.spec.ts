import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDosificacionComponent } from './editar-dosificacion.component';

describe('EditarDosificacionComponent', () => {
  let component: EditarDosificacionComponent;
  let fixture: ComponentFixture<EditarDosificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDosificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDosificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
