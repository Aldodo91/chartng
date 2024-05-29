import { Component, Input, OnInit } from '@angular/core';

export type ChartTipe =
  | 'line'
  | 'bar'
  | 'scatter'
  | 'bubble'
  | 'pie'
  | 'doughnut'
  | 'polarArea'
  | 'radar';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input() labels: string[] = [];
  @Input() dataset: any[] = [];
  @Input() title: string = '';
  @Input() colors: any = null;
  @Input() type: ChartTipe = 'doughnut';
  basicData: any = null;
  basicOptions: any = null;

  constructor() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.basicOptions = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }

  ngOnInit(): void {
    this.basicData = {
      labels: this.labels,
      datasets: [
        {
          label: this.title || '',
          data: this.dataset,
          backgroundColor: this.colors,
          hoverBackgroundColor: this.colors,
        },
      ],
    };
  }
}
