import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonUsuario2Component } from './boton-usuario2.component';

describe('BotonUsuario2Component', () => {
  let component: BotonUsuario2Component;
  let fixture: ComponentFixture<BotonUsuario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonUsuario2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonUsuario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
