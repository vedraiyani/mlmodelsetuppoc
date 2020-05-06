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
  private _mockdata: any;
  constructor() {
    this._mockdata = MockScenarios
  }

  fetchMockScenarioes(){
    return this._mockdata.map((ele,index)=>{
        // var obj: {[k: string]: any} = ele;
        // obj.id = index;
        // return obj;
        ele['index']=index;
        return ele;
      });
  }

  fetchMockImpScenarioes(){
    return <Scenario[]>this._mockdata.map((ele)=>{
        let scenario:Scenario = {
          bo : ele["Business Object"],
          name : ele["Name"],
          area : ele["Area"],
          type : ele["Type"],
          readiness : ele["Readiness"],
          createdby : ele["Created By"],
          createdon : ele["Created On"]

        }
        return scenario;
      });
  }

  fetchModels(name: string){
    return [...this._mockdata.filter(elem=>elem.Name === name)[0].Models].filter(ele=>ele!=undefined).map((ele,index)=>{
        ele['index']=index;
        return ele;
      });
  }

  async deleteModel(scenario: number, model: number){
    delete this._mockdata[scenario].Models[model]
  }

  getCarsSmall() {
    return <Car[]> CarSmall.data;
  }

  getCarsMedium() {
    return <Car[]> CarMedium.data;
  }

}
