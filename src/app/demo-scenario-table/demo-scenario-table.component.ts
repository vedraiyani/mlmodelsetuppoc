import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../domain/car';
import { Scenario } from '../domain/scenario';
import { MyserviceService } from '../myservice.service';

import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'demo-scenario-table',
  templateUrl: './demo-scenario-table.component.html',
  styleUrls: ['./demo-scenario-table.component.scss']
})
export class DemoScenarioTableComponent implements OnInit {

  cars: Scenario[];
  cols: any[];
  multiSortMeta: any[];
  selectedCar3: Scenario;
  loading: boolean;
  _selectedColumns: any[];
  exportColumns: any[];

  constructor(private myService: MyserviceService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.cars = this.myService.fetchMockImpScenarioes();//this.myService.getCarsMedium();
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
    console.log(event)
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

  exportPdf() {
      // import("jspdf").then(jsPDF => {
      //     import("jspdf-autotable").then(x => {
      //         const doc = new jsPDF.default(0,0);
      //         doc.autoTable(this.exportColumns, this.cars);
      //         doc.save('primengTable.pdf');
      //     })
      // })
  }

  exportExcel() {
      // import("xlsx").then(xlsx => {
      //     const worksheet = xlsx.utils.json_to_sheet(this.getCars());
      //     const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      //     const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      //     this.saveAsExcelFile(excelBuffer, "primengTable");
      // });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      // import("file-saver").then(FileSaver => {
      //     let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      //     let EXCEL_EXTENSION = '.xlsx';
      //     const data: Blob = new Blob([buffer], {
      //         type: EXCEL_TYPE
      //     });
      //     FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      // });
  }

  getCars() {
      let cars = [];
      for(let car of this.cars) {
          // car.year = car.year.toString();
          cars.push(car);
      }
      return cars;
  }

}
