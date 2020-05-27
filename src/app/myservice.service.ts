import { Injectable } from '@angular/core';
import MockScenarios from '../assets/MockScenarios.json';

import { Car } from './domain/car';
import CarMedium from '../assets/cars-medium.json';
import CarSmall from '../assets/cars-small.json';

import { Scenario } from './domain/scenario';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private mockdata: any;
  constructor() {
    this.mockdata = MockScenarios;
  }

  fetchMockScenarioes(){
    return this.mockdata.map((ele, index) => {
        // var obj: {[k: string]: any} = ele;
        // obj.id = index;
        // return obj;
        ele['index'] = index; // tslint:disable-line
        return ele;
      });
  }

  fetchMockImpScenarioes(){
    return this.mockdata as Scenario[];
    // return this.mockdata.map((ele) => {
    //     const scenario: Scenario = {
    //       bo : ele['Business Object'],
    //       name : ele['Name'],
    //       area : ele['Area'],
    //       type : ele['Type'],
    //       readiness : ele['Readiness'],
    //       createdby : ele['Created By'],
    //       createdon : ele['Created On']

    //     };
    //     return scenario;
    //   }) as Scenario[];
  }

  fetchModels(name: string){
    return [...this.mockdata.filter(elem => elem.name === name)[0].models].filter(ele => ele !== undefined).map((ele, index) => {
        ele['index'] = index; // tslint:disable-line
        return ele;
      });
  }

  async deleteModel(scenario: number, model: number){
    delete this.mockdata[scenario].models[model];
  }

  getCarsSmall() {
    return CarSmall.data as Car[];
  }

  getCarsMedium() {
    return CarMedium.data as Car[];
  }

}
