import { Component, OnInit } from '@angular/core';

import { Scenario } from '../../domain/scenario';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-clarity-scenarios',
  templateUrl: './clarity.component.html',
  styleUrls: ['./clarity.component.scss']
})
export class ClarityComponent implements OnInit {

  scenarios: Scenario[];
  cols: any[];
  selected;

  constructor(private myService: MyserviceService) { }

  ngOnInit(): void {
    this.scenarios = this.myService.fetchMockImpScenarioes();
    this.cols = [
      {field: 'name', header: 'Name' },
      { field: 'bo', header: 'BO' },
      { field: 'area', header: 'Area' },
      {field: 'type', header: 'Type' },
      { field: 'readiness', header: 'Readiness' },
      {field: 'createdby', header: 'Created By' },
      {field: 'createdon', header: 'Created On' }
    ];
  }

  selectionChanged(event){
    this.selected = event;
  }

}
