import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/models/interfaces/weather-data';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {
  private initialCityName = 'Jundiaí';
  private weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(this.weatherData.name);
      },
      error: (error) => console.log(error),
    });
  }
}
