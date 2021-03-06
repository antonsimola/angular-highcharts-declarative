import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HcChartService } from '../hc-chart.service';
import { TitleOptions } from 'highcharts';
import { AbstractTitleComponent } from './abstract-title.component';

@Component({
  selector: 'hc-title',
  template: '<span *ngIf="!text" style="display: none;width: 0;height:0;" #text><ng-content></ng-content></span>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        width: 0;
        height: 0;
        display: none;
      }
    `
  ]
})
export class HcTitleComponent extends AbstractTitleComponent implements TitleOptions {
  key = 'title';
  @Input()
  margin?: number;

  constructor(chartService: HcChartService) {
    super(chartService);
  }
}
