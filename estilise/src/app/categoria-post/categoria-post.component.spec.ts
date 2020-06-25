import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPostComponent } from './categoria-post.component';

describe('CategoriaPostComponent', () => {
  let component: CategoriaPostComponent;
  let fixture: ComponentFixture<CategoriaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
