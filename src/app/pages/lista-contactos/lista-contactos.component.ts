import { Component } from '@angular/core';
import { Persona } from 'src/app/domain/persona';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {
  contactos:Persona [] = []

  constructor(private contactoServices: ContactosService){

  }
}
