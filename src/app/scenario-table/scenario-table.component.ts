import {Component, OnInit} from '@angular/core';
import {
  addInitListener,
  addContextUpdateListener
} from '@luigi-project/client';

/**
 * @title List All the ML Scenarios
 */

@Component({
  selector: 'app-scenario-table',
  templateUrl: './scenario-table.component.html',
  styleUrls: ['./scenario-table.component.scss']
})
export class ScenarioTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    addInitListener(initialContext => {
      // this.message = 'Luigi Client initialized.';
      // if (!this.ref['destroyed']) {
      //   this.ref.detectChanges();
      // }
    });
   }

}
