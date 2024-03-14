import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  generoForm: FormGroup;
  respuestaGenero: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.generoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  predecirGenero() {
    const nombre = this.generoForm.get('nombre')?.value;

    if (nombre) {
      this.http.get(`https://api.genderize.io/?name=${nombre}`)
        .subscribe((response: any) => {
          this.respuestaGenero = response;
          this.actualizarEstilo();
        });
    }
  }

  private actualizarEstilo() {
    const genero = this.respuestaGenero.gender;

    if (genero === 'male') {
      // Aplicar estilo azul
      console.log('Estilo Azul');
    } else if (genero === 'female') {
      // Aplicar estilo rosa
      console.log('Estilo Rosa');
    }
  }
  ngOnInit() {
    this.generoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }
}
  /*predecirGenero() {
    this.http.get(`https://api.genderize.io/?name=${this.nombre}`)
      .subscribe((response: any) => {
        this.respuestaGenero = response;
      });
  }*/

 


