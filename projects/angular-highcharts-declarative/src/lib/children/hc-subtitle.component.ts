import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HcChartService} from '../hc-chart.service';
import {SubtitleOptions} from 'highcharts';
import {AbstractTitleComponent, hiddenStyles} from './abstract-title.component';

@Component({
  selector: 'hc-subtitle',
  template: '<span *ngIf="!text" style="visibility: hidden;" #text><ng-content></ng-content></span>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: hiddenStyles
})
export class HcSubtitleComponent extends AbstractTitleComponent implements SubtitleOptions {
  key = 'subtitle';

  constructor(chartService: HcChartService) {
    super(chartService);
  }
}
