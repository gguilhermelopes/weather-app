import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = 'e3cf179a1ede5edea77d06703649c386';
  private API_URL = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(
      `${this.API_URL}/weather?q=${cityName}&units=metric&mode=json&appid=${this.API_KEY}`,
      {}
    );
  }
}
