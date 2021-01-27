import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonUsuario1Component } from './boton-usuario1.component';

describe('BotonUsuario1Component', () => {
  let component: BotonUsuario1Component;
  let fixture: ComponentFixture<BotonUsuario1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonUsuario1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonUsuario1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
