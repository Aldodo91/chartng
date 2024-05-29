import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartItem } from 'chart.js';
import { generateColor } from 'src/common/functions/ustils';
import { StackedBarTypeData } from 'src/common/types/stackedBarTypeData';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css'],
})
export class StackedBarChartComponent implements OnInit {
  chart: any = null;
  colorGen = generateColor();
  @Input() normalized = false;
  @Input() dataBE: StackedBarTypeData[] = [];
  dataset: any[] = [];

  createDataset(dataBE: StackedBarTypeData[]) {
    let dataset: any[] = [];
    let numValues = dataBE[0].values.length;

    for (let i = 0; i < numValues; i++) {
      let newData = [];

      for (let j = 0; j < dataBE.length; j++) {
        newData.push(dataBE[j].values[i]);
      }

      dataset.push({
        data: newData,
        backgroundColor: `${this.colorGen.next().value}`,
        label: dataBE[i].label,
      });
    }
    return dataset;
  }

  normalize(dataBE: StackedBarTypeData[]) {
    const scaleArrayToSum100 = (arr: number[]) => {
      const totalSum = arr.reduce((sum, value) => sum + value, 0);
      const scaleFactor = 100 / totalSum;

      return arr.map((value) => value * scaleFactor);
    };

    for (let i = 0; i < dataBE.length; i++) {
      dataBE[i].values = scaleArrayToSum100(dataBE[i].values);
    }
    return dataBE;
  }

  ngOnInit(): void {
    this.normalize(this.dataBE);
    let element = document.getElementById('acquisitions') as ChartItem;
    if (element) {
      new Chart(element, {
        type: 'bar',
        options: {
          responsive: true,
          resizeDelay: 0,
          indexAxis: 'y',
          scales: {
            x: {
              stacked: true,
              grid: {
                color: 'transparent',
              },
            },
            y: {
              bounds: 'data',
              stacked: true,
              grid: {
                color: 'transparent',
              },
            },
          },
          plugins: {
            legend: {
              display: true,
            },
          },
        },

        data: {
          labels: this.dataBE.map((e) => e.yAxis),
          datasets: this.normalized
            ? this.createDataset(this.normalize(this.dataBE))
            : this.createDataset(this.dataBE),
        },
      });
    }
  }
}
