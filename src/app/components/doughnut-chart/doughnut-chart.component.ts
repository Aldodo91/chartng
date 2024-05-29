import { Component, Input } from '@angular/core';
import { ChartTipe } from 'src/app/components/chart/chart.component';
import { generateColor } from 'src/common/functions/ustils';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent {
  @Input() title = 'Pervenute';
  type: ChartTipe = 'doughnut';
  @Input() labels = [
    'Sportello',
    'Uso interno ufficio',
    'Contact Center',
    'Valore D',
    'Valore E',
  ];
  @Input() dataset = [76, 98, 56, 255, 188];
  combinedData: any[] = [];
  colors: any[] = [];
  colorGen = generateColor();
  total = 0;

  ngOnInit() {
    this.colors = this.labels.map(() => this.colorGen.next().value);
    this.combinedData = this.labels.map((label, index) => ({
      label: label,
      valore: this.dataset[index],
      color: this.colors[index],
    }));
    this.total = this.dataset.reduce((acc, cur) => acc + cur);
  }
}
