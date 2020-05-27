import { NgModule } from '@angular/core';

import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
   imports: [],
   exports: [
    TableModule,
    ButtonModule,
    MultiSelectModule,
    TabViewModule
   ],
   providers: []
})

export class PrimeNGModule { }
