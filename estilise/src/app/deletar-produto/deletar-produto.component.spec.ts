import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarProdutoComponent } from './deletar-produto.component';

describe('DeletarProdutoComponent', () => {
  let component: DeletarProdutoComponent;
  let fixture: ComponentFixture<DeletarProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
