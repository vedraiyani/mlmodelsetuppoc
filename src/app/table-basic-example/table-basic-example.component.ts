import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { MyserviceService } from '../myservice.service';

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'table-basic-example',
  templateUrl: './table-basic-example.component.html',
  styleUrls: ['./table-basic-example.component.sass']
})
export class TableBasicExampleComponent implements OnInit {
  displayedColumns: string[];
  dataSource : MatTableDataSource<any>;
  selectedRowIndex: number = -1;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private myservice: MyserviceService){ }

  ngOnInit() {

    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(this.myservice.fetchMockScenarioes().map((ele,index)=>{
        // var obj: {[k: string]: any} = ele;
        // obj.id = index;
        // return obj;
        ele['id']=index;
        return ele;
      }));
      this.displayedColumns = ['Business Object', 'Name', 'Area', 'Type', 'Readiness', 'Created By', 'Created On'];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  highlight(row){
      this.selectedRowIndex = row.id;
  }
}