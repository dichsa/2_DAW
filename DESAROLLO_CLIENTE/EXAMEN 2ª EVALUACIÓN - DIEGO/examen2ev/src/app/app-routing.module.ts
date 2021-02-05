import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EXButtonComponent } from '../exbutton/exbutton.component';

const routes: Routes = [
  {path: 'boton', component: EXButtonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
