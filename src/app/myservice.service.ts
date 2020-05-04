import { Injectable } from '@angular/core';
import MockScenarios from '../assets/MockScenarios.json';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() {
  }

  fetchMockScenarioes(){
    return MockScenarios;
  }

}
