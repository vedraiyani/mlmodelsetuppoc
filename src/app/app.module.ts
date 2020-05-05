import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';

import { MyserviceService } from './myservice.service';
import { TableModelComponent } from './table-model/table-model.component';

@NgModule({
  declarations: [
    AppComponent,
    TableBasicExampleComponent,
    TableModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
