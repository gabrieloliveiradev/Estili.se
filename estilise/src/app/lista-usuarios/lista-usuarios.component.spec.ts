import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuariosComponent } from './lista-usuarios.component';

describe('ListaUsuariosComponent', () => {
  let component: ListaUsuariosComponent;
  let fixture: ComponentFixture<ListaUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
