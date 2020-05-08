import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { PrimeNGModule } from './primeng.module';

import { ScenarioTableComponent } from './scenario-table/scenario-table.component';

import { MyserviceService } from './myservice.service';
import { ModelTableComponent } from './model-table/model-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ScenarioTableComponent,
    ModelTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    PrimeNGModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
