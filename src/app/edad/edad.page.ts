import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  edadForm: FormGroup;
  respuestaEdad: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { 
    this.edadForm = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  determinarEdad() {
    const nombre = this.edadForm.get('nombre')?.value;

    if (nombre) {
      this.http.get(`https://api.agify.io/?name=${nombre}`)
        .subscribe((response: any) => {
          this.respuestaEdad = response;
          this.mostrarMensajeEdad();
        });
    }
  }

  mostrarMensajeEdad() {
    console.log('Respuesta de la API:', this.respuestaEdad);
  
    const edad = this.respuestaEdad.age;
  
    if (edad < 18) {
      console.log('Es joven');
      // Puedes mostrar una imagen de joven y la edad
    } else if (edad >= 18 && edad <= 65) {
      console.log('Es adulto');
      // Puedes mostrar una imagen de adulto y la edad
    } else {
      console.log('Es anciano');
      // Puedes mostrar una imagen de anciano y la edad
    }
  }
  
  ngOnInit() {
    this.edadForm = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

}