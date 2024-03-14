import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-word-press',
  templateUrl: './word-press.page.html',
  styleUrls: ['./word-press.page.scss'],
})

@Injectable({
  providedIn: 'root',
}) 

export class WordPressPage implements OnInit {

  private apiUrl = 'https://www.phocafe.co.uk/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  obtenerUltimasNoticias(): Observable<any[]> {
    const url = `${this.apiUrl}/posts?per_page=3`;
    return this.http.get<any[]>(url);
  }

  ngOnInit() {
  }

}
