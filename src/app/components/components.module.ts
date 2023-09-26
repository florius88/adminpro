import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficaDonutComponent } from './grafica-donut/grafica-donut.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficaDonutComponent,
  ],
  exports: [
    IncrementadorComponent,
    GraficaDonutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  ]
})
export class ComponentsModule { }
