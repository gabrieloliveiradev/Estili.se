import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDeletarCategoriaComponent } from './editar-deletar-categoria.component';

describe('EditarDeletarCategoriaComponent', () => {
  let component: EditarDeletarCategoriaComponent;
  let fixture: ComponentFixture<EditarDeletarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDeletarCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDeletarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
