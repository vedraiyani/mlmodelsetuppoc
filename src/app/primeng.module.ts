import { NgModule } from '@angular/core';

import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';

@NgModule({
   imports: [],
   exports: [
    TableModule,
    ButtonModule,
    MultiSelectModule
   ],
   providers: []
})

export class PrimeNGModule { }
