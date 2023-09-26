import { Component, Input, SimpleChanges } from '@angular/core';

import { ChartData, ChartEvent } from 'chart.js';


@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styles: [
  ]
})
export class GraficaDonutComponent {

  // Doughnut
  @Input() titulo: string = 'Sin título'

  @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3',];

  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
      },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }


}
