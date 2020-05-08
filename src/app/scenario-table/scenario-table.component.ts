import {Component, OnInit} from '@angular/core';

import { Scenario } from '../domain/scenario';
import { MyserviceService } from '../myservice.service';

import { LazyLoadEvent } from 'primeng/api';

/**
 * @title List All the ML Scenarios
 */

@Component({
  selector: 'scenario-table',
  templateUrl: './scenario-table.component.html',
  styleUrls: ['./scenario-table.component.scss']
})
export class ScenarioTableComponent implements OnInit {

  scenarios: Scenario[];
  cols: any[];
  multiSortMeta: any[];
  selectedScenario: Scenario;
  loading: boolean;
  _selectedColumns: any[];
  exportColumns: any[];

  constructor(private myService: MyserviceService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.scenarios = this.myService.fetchMockImpScenarioes();//this.myService.getCarsMedium();
        this.loading = false;
    }, 5000);
    // this.cars = this.myService.getCarsMedium();//.then(cars => this.cars = cars);
    this.cols = [
      {field: 'name', header: 'Name' },
      { field: 'bo', header: 'BO' },
      { field: 'area', header: 'Area' },
      {field: 'type', header: 'Type' },
      { field: 'readiness', header: 'Readiness' },
      {field: 'createdby', header: 'Created By' },
      {field: 'createdon', header: 'Created On' }
      // { field: 'vin', header: 'Vin' },
      // {field: 'year', header: 'Year' },
      // { field: 'brand', header: 'Brand' },
      // { field: 'color', header: 'Color' }
    ];
    this.multiSortMeta = [];
    this.multiSortMeta.push({field: 'name', order: 1});
    // this.multiSortMeta.push({field: 'year', order: 1});
    // this.multiSortMeta.push({field: 'brand', order: -1});

    this._selectedColumns = this.cols;

    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }


  onRowSelect(event) {
    // this.messageService.add({severity:'info', summary:'Car Selected', detail:'Vin: ' + event.data.vin});
    this.selectedScenario = event.data;
    // console.log(event)
  }

  onRowUnselect(event) {
      // this.messageService.add({severity:'info', summary:'Car Unselected', detail:'Vin: ' + event.data.vin});
  }

  loadCarsLazy(event: LazyLoadEvent) {
    // this.cars = this.myService.getCarsMedium();

    // this.loading = true;
    // setTimeout(() => {
    //   this.cars = this.myService.getCarsMedium().slice(event.first, (event.first + event.rows));
    //   this.loading = false;
    // }, 1000);
  }

  // @Input() get selectedColumns(): any[] {
  //   return this._selectedColumns;
  // }

  // set selectedColumns(val: any[]) {
  //     //restore original order
  //     this._selectedColumns = this.cols.filter(col => val.includes(col));
  // }

}
