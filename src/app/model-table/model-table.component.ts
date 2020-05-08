import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-model-table',
  templateUrl: './model-table.component.html',
  styleUrls: ['./model-table.component.scss']
})
export class ModelTableComponent implements OnInit {

  // @Input() Scenario: any;

  displayedColumns: string[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  selectedRow: any;

  @ViewChild('ModelPaginator', {static: true, read: MatPaginator}) modelpaginator: MatPaginator;
  @ViewChild('ModelSort', {static: true}) modelsort: MatSort;

  constructor(private myservice: MyserviceService){ }

  private scenario = '';

  @Input()
  set Scenario(scenario: any) {
    this.scenario = scenario;
    if (scenario !== undefined){
      this.refreshDataSource();
    }
  }

  get Scenario(): any { return this.scenario; }

  ngOnInit() {
    setTimeout(() => {
      this.displayedColumns = ['Name', 'Status', 'Data Source', 'Action', 'Training progress', 'Accuracy', 'Last Updated', 'Created On'];
      this.dataSource.paginator = this.modelpaginator;
      this.dataSource.sort = this.modelsort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  highlight(row){
      this.selectedRow = row;
  }

  detAccuracyColor(accuracy){
    const acc: number = parseInt(accuracy, 10);
    if (acc > 85){
      return 'primary';
    }else if (acc < 85 && acc > 70){
      return 'accent';
    }else{
      return 'warn';
    }
  }
  deleteModel(model: any){
    const that = this;
    this.myservice.deleteModel(this.Scenario.index, model.index).then(() => {
      this.refreshDataSource();
    });
  }

  refreshDataSource(){
    this.dataSource.data = this.myservice.fetchModels(this.Scenario.name);
  }

}
