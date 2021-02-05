import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EXSecondViewComponent } from 'src/exsecond-view/exsecond-view.component';
import { EXButtonComponent } from '../exbutton/exbutton.component';

const routes: Routes = [
  {path: 'boton', component: EXButtonComponent},
  {path: 'boton2', component: EXSecondViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
