import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <mat-card class="mat-elevation-z8" style="margin: 64px">
      <hc-chart [type]="chartType">
        <hc-title [text]="chartType"></hc-title>
        <hc-series [name]="chartType" [data]="data"></hc-series>
      </hc-chart>
    </mat-card>

    <mat-form-field>
      <mat-select [(ngModel)]="chartType">
        <mat-option *ngFor="let option of options" [value]="option">{{ option }}</mat-option>
      </mat-select>
    </mat-form-field>
  `
})
export class SimpleComponent {
  data = [1, 2, 3, 3, 2, 1];
  chartType = 'line';
  options = ['line', 'spline', 'bar', 'column'];
}
