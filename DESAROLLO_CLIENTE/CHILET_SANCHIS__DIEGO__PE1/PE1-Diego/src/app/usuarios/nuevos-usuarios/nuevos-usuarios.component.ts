import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../usuario.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-nuevos-usuarios',
  templateUrl: './nuevos-usuarios.component.html',
  styleUrls: ['./nuevos-usuarios.component.css']
})
export class NuevosUsuariosComponent implements OnInit {

  form: any = {};
  usuario = {} as any;
  creado = false;
  failUsuario = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

    onCreate(): void {
      this.usuarioService.crear(this.form).subscribe(data => {
        this.mensajeOK = data.mensaje;
        this.creado = true;
        this.failUsuario = false;
      },
        (err: any) => {
          this.mensajeFail = err.error.mensaje;
          this.creado = false;
          this.failUsuario = true;
        }
      );
    }
  
    volver(): void {
      window.history.back();
    }
  
  }
