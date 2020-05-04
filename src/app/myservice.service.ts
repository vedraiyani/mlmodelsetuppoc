import { Injectable } from '@angular/core';
import MockScenarios from '../assets/MockScenarios.json';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() {
    // console.log('Reading local json files');
    // console.log(MockScenarios);
  }
  fetchMockScenarioes(){
    return MockScenarios;
  }

}
