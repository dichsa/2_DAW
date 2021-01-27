import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonProducto1Component } from './boton-producto1.component';

describe('BotonProducto1Component', () => {
  let component: BotonProducto1Component;
  let fixture: ComponentFixture<BotonProducto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonProducto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonProducto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
