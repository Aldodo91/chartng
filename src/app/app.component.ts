import { Component, OnInit } from '@angular/core';
import { StackedBarTypeData } from 'src/common/types/stackedBarTypeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correct path to HTML file
})
export class AppComponent implements OnInit {
  labels = [
    'Sportello',
    'Uso interno ufficio',
    'Contact Center',
    'Valore D',
    'Valore E',
  ];
  dataset = [76, 98, 56, 255, 188];
  //_________________________________________//

  dataBE: StackedBarTypeData[] = [
    {
      yAxis: '2000',
      values: [727, 238, 1238, 300],
      label: 'Sportello',
    },
    {
      yAxis: '2001',
      values: [589, 553, 553, 300],
      label: 'Uso interno ufficio',
    },
    {
      yAxis: '2002',
      values: [553, 746, 746, 300],
      label: 'Contact Center',
    },
    {
      yAxis: '2003',
      values: [653, 546, 846, 200],
      label: 'Altre Fonti',
    },
  ];

  ngOnInit(): void {}
}
