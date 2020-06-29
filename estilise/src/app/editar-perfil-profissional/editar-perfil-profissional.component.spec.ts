import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilProfissionalComponent } from './editar-perfil-profissional.component';

describe('EditarPerfilProfissionalComponent', () => {
  let component: EditarPerfilProfissionalComponent;
  let fixture: ComponentFixture<EditarPerfilProfissionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPerfilProfissionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
