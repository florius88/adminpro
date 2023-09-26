import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: string[] = ['Pan', 'Refresco', 'Tacos',]
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: [10, 15, 40],
        backgroundColor: ['#6857E6', "#009FEE", '#F02059'],
      },
    ],
  };

  labels2: string[] = ['Harina', 'Agua', 'Especias',]
  public data2: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: [25, 90, 10],
        backgroundColor: ['#6857E6', "#009FEE", '#F02059'],
      },
    ],
  };

}
