import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'table-model',
  templateUrl: './table-model.component.html',
  styleUrls: ['./table-model.component.scss']
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
      this.refreshDataSource();
    }
  }

  get Scenario(): any { return this._scenario; }

  ngOnInit() {
    setTimeout(() => {
      this.displayedColumns = ["Name", "Status", "Data Source", "Action", "Training progress", "Accuracy", "Last Updated", "Created On"]
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
    let acc:number = parseInt(accuracy);
    if(acc > 85){
      return 'primary';
    }else if(acc < 85 && acc > 70){
      return 'accent';
    }else{
      return 'warn';
    }
  }
  deleteModel(model:any){
    let that = this
    this.myservice.deleteModel(this.Scenario.index, model.index).then(()=>{
      this.refreshDataSource();
    });
  }

  refreshDataSource(){
    this.dataSource.data = this.myservice.fetchModels(this.Scenario.Name);
  }

}
