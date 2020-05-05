import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'table-model',
  templateUrl: './table-model.component.html',
  styleUrls: ['./table-model.component.sass']
})
export class TableModelComponent implements OnInit {

  // @Input() Scenario: any;

  displayedColumns: string[];
  dataSource : MatTableDataSource<any> = new MatTableDataSource<any>();
  selectedRow: any;

  @ViewChild('ModelPaginator', {static: true, read: MatPaginator}) modelpaginator: MatPaginator;
  @ViewChild('ModelSort', {static: true}) modelsort: MatSort;

  constructor(private myservice: MyserviceService){ }
  
  private _scenario = '';

  @Input()
  set Scenario(scenario: any) {
    this._scenario = scenario;
    if(scenario!=undefined){
      this.dataSource.data = this.myservice.fetchMockScenarioes().map((ele,index)=>{
        ele['index']=index;
        return ele;
      }).slice(0,scenario.index+1);
      // this.displayedColumns = ['Business Object', 'Name', 'Area', 'Type', 'Readiness', 'Created By', 'Created On'];
      // this.dataSource.paginator = this.modelpaginator;
      // this.dataSource.sort = this.modelsort;
    }
  }

  get Scenario(): any { return this._scenario; }

  ngOnInit() {
    setTimeout(() => {
      // this.dataSource.data = this.myservice.fetchMockScenarioes().map((ele,index)=>{
      //   ele['index']=index;
      //   return ele;
      // });
      this.displayedColumns = ['Business Object', 'Name', 'Area', 'Type', 'Readiness', 'Created By', 'Created On'];
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

}
