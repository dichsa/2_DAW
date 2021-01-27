import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonProducto2Component } from './boton-producto2.component';

describe('BotonProducto2Component', () => {
  let component: BotonProducto2Component;
  let fixture: ComponentFixture<BotonProducto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonProducto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonProducto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
