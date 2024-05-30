import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './components/chart/chart.component';
import { CardComponent } from './components/card/card.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { StackedBarChartComponent } from './components/stacked-bar-chart/stacked-bar-chart.component';
import { PrimeTableComponent } from './components/prime-table/prime-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CardComponent,
    DoughnutChartComponent,
    StackedBarChartComponent,
    PrimeTableComponent,
  ],
  imports: [BrowserModule, ChartModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
