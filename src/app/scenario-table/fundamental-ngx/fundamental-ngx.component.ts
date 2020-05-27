import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-fundamental-ngx',
  templateUrl: './fundamental-ngx.component.html',
  styleUrls: ['./fundamental-ngx.component.scss']
})
export class FundamentalNgxComponent implements OnInit {

  tableRows;
  // column1SortDir: string = 'none';
  // dateSortDir: string = 'none';
  cols: any[];

  constructor(private myService: MyserviceService) { }
  ngOnInit() {
    this.tableRows = this.myService.fetchMockImpScenarioes();
    this.cols = [
      {field: 'name', header: 'Name' },
      { field: 'bo', header: 'BO' },
      { field: 'area', header: 'Area' },
      {field: 'type', header: 'Type' },
      { field: 'readiness', header: 'Readiness' },
      {field: 'createdby', header: 'Created By' },
      {field: 'createdon', header: 'Created On' }
    ];

    // this.tableRows = [
    //     {
    //         column1: 'Row 1',
    //         column2: 'Row 1',
    //         column3: 'Row 1',
    //         date: '09-07-18',
    //         type: 'search'
    //     },
    //     {
    //         column1: 'Row 2',
    //         column2: 'Row 2',
    //         column3: 'Row 2',
    //         date: '09-08-18',
    //         type: 'cart'
    //     },
    //     {
    //         column1: 'Row 3',
    //         column2: 'Row 3',
    //         column3: 'Row 3',
    //         date: '02-14-18',
    //         type: 'calendar'
    //     },
    //     {
    //         column1: 'Row 4',
    //         column2: 'Row 4',
    //         column3: 'Row 4',
    //         date: '12-30-17',
    //         type: 'search'
    //     },
    //     {
    //         column1: 'Row 5',
    //         column2: 'Row 5',
    //         column3: 'Row 5',
    //         date: '11-12-18',
    //         type: 'search'
    //     }
    // ];
  }

  sortColumn1() {
      // this.dateSortDir = 'none';
      // if (this.column1SortDir === 'asc') {
      //     this.column1SortDir = 'dsc';
      //     this.tableRows.sort((val1, val2) => {
      //         if (val1.column1 < val2.column1) {
      //             return -1;
      //         } else if (val1.column1 > val2.column1) {
      //             return 1;
      //         } else {
      //             return 0;
      //         }
      //     });
      // } else if (this.column1SortDir === 'none' || this.column1SortDir === 'dsc') {
      //     this.column1SortDir = 'asc';
      //     this.tableRows.sort((val1, val2) => {
      //         if (val1.column1 > val2.column1) {
      //             return -1;
      //         } else if (val1.column1 < val2.column1) {
      //             return 1;
      //         } else {
      //             return 0;
      //         }
      //     });
      // }
  }

  sortDate() {
      // this.column1SortDir = 'none';
      // if (this.dateSortDir === 'asc') {
      //     this.dateSortDir = 'dsc';
      //     this.tableRows.sort((val1, val2) => {
      //         return +new Date(val1.date) - +new Date(val2.date);
      //     });
      // } else if (this.dateSortDir === 'none' || this.dateSortDir === 'dsc') {
      //     this.dateSortDir = 'asc';
      //     this.tableRows.sort((val1, val2) => {
      //         return +new Date(val2.date) - +new Date(val1.date);
      //     });
      // }
  }

}
