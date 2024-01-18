import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

const routes: Routes = [
  {path:"pages/acerca",component:AcercadeComponent},
  {path:"pages/contacto",component:ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
