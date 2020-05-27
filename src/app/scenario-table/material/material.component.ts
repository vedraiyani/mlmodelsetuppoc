import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-material-scenarios',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  displayedColumns: string[];
  dataSource : MatTableDataSource<any>;
  selectedRow: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private myservice: MyserviceService){ }

  ngOnInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(this.myservice.fetchMockScenarioes());
      this.displayedColumns = ['bo', 'name', 'area', 'type', 'readiness', 'createdby', 'createdon'];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  highlight(row){
      this.selectedRow = row;
  }

  refresh(){
    this.dataSource.data = this.myservice.fetchMockScenarioes();
  }

  openMLDocumentation(){
    let url: string = 'http://219.90.67.154/report-service/quicktask/TCPDF/examples/test-tcpdf.php?loggedinuser=';
    window.open(url, '_blank');
  }
}
