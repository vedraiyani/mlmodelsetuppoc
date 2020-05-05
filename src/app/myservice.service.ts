import { Injectable } from '@angular/core';
import MockScenarios from '../assets/MockScenarios.json';

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

  fetchModels(name: string){
    return [...this._mockdata.filter(elem=>elem.Name === name)[0].Models].filter(ele=>ele!=undefined).map((ele,index)=>{
        ele['index']=index;
        return ele;
      });
  }

  async deleteModel(scenario: number, model: number){
    delete this._mockdata[scenario].Models[model]
  }

}
