import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {HcChartService} from '../hc-chart.service';
import {TitleOptions} from 'highcharts';
import {AbstractTitleComponent, hiddenStyles} from './abstract-title.component';

@Component({
  selector: 'hc-title',
  template: '<span *ngIf="!text" style="visibility: hidden;width: 0;height:0;" #text><ng-content></ng-content></span>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: hiddenStyles
})
export class HcTitleComponent extends AbstractTitleComponent implements TitleOptions {
  key = 'title';
  @Input()
  margin?: number;

  constructor(chartService: HcChartService) {
    super(chartService);
  }
}
