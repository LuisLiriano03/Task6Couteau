import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Caja de Herramientas.', url: '/herramientas', icon: 'mail' },
    { title: 'Genero de Personas.', url: '/genero', icon: 'paper-plane' },
    { title: 'Edad de Personas.', url: '/edad', icon: 'heart' },
    { title: 'Pais.', url: '/pais', icon: 'rose' },
    { title: 'Clima en RD.', url: '/clima', icon: 'trash' },
    { title: 'WordPress.', url: '/word-press', icon: 'warning' },
    { title: 'Acerca de.', url: '/acercade', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
