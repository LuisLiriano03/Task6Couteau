import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  private apiKey = '1234'; 
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() { }

  getWeather(city: string) {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric', 
    };

    return axios.get(this.apiUrl, { params });
  }

  ngOnInit() {
  }

}
