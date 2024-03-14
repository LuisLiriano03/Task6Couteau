import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {

  pais: string = ' ';
  universidades: any[] = [];

  constructor(private http: HttpClient) { }

  buscarUniversidades() {
    const url = `http://universities.hipolabs.com/search?country=${this.pais}`;
    
    this.http.get<any[]>(url).subscribe((data) => {
      this.universidades = data;
    });
  }

  ngOnInit() {
  }

}
