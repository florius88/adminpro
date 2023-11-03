import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { AccountSettingComponent } from './account-setting/account-setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
    AccountSettingComponent,
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent,
  ],
  exports: [
    AccountSettingComponent,
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
  ]
})
export class PagesModule { }
