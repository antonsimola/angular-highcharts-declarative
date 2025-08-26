import { Component } from '@angular/core';
import { ChartClickEventObject } from 'highcharts';

@Component({
  selector: 'app-simple',
  template: `
    <mat-card class="mat-elevation-z8" style="margin: 64px">
      <hc-chart [type]="chartType" (clickChart)="chartClicked($event)">
        <hc-title>{{chartType}}</hc-title>
        <hc-series [name]="chartType" [data]="data"> </hc-series>
      </hc-chart>
    </mat-card>

    <mat-form-field>
      <mat-select [(ngModel)]="chartType">
        <mat-option *ngFor="let option of options" [value]="option">{{ option }}</mat-option>
      </mat-select>
    </mat-form-field>
    <p>chart clicked at : {{ clickX | number }} {{ clickY | number }}</p>
  `
})
export class SimpleComponent {
  data = [1, 2, 3, 3, 2, 1];
  chartType = 'line';
  options = ['line', 'spline', 'bar', 'column'];
  clickX: number = null;
  clickY: number = null;
  chartClicked(event: ChartClickEventObject) {
    console.log(event);
    this.clickX = event.xAxis[0].value;
    this.clickY = event.yAxis[0].value;
  }
}
