import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HcChartService} from '../hc-chart.service';
import {AlignValue, CSSObject, SubtitleOptions, VerticalAlignValue} from 'highcharts';

@Component({
  selector: 'hc-subtitle',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcSubtitleComponent implements OnInit, OnChanges, SubtitleOptions {
  @Input()
  align?: AlignValue;
  @Input()
  floating?: boolean;
  @Input()
  style?: CSSObject;
  @Input()
  text?: string;
  @Input()
  useHTML?: boolean;
  @Input()
  verticalAlign?: VerticalAlignValue;
  @Input()
  widthAdjust?: number;
  @Input()
  x?: number;
  @Input()
  y?: number;

  constructor(private chartService: HcChartService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const state = {...this};
    delete state.chartService;
    this.update(state);

  }

  update(props: Partial<SubtitleOptions>) {
    this.chartService.update({subtitle: props});
  }
}
