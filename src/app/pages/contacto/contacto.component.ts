import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  persona:Persona = new Persona();

  constructor(private router: Router, private contactoServices: ContactosService){ }

  savePersona(){
    this.contactoServices.addContacto(this.persona)
    this.persona = new Persona();
    console.log('contacots', this.contactoServices.getContatos())
  }


goAcerca(){
 console.log("Llamado acerca de ", this.persona)
 this.router.navigate(['paginas/acerca'])
}
}
