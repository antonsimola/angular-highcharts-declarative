import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {
  ColorString,
  CSSObject,
  Dictionary,
  FormatterCallbackFunction,
  GradientColorObject,
  OptionsHeaderShapeValue,
  PatternObject,
  Point,
  ShadowOptionsObject,
  TooltipDateTimeLabelFormatsOptions,
  TooltipFormatterCallbackFunction,
  TooltipOptions,
  TooltipPositionerCallbackFunction,
  TooltipShapeValue
} from 'highcharts';
import {changesToFlat} from '../helpers';
import {HcChartService} from '../hc-chart.service';
import {BehaviorSubject} from 'rxjs';
import {first} from 'rxjs/operators';

@Component({
  selector: 'hc-tooltip',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcTooltipComponent implements OnInit, OnChanges, TooltipOptions {
  @Input()
  animation?: boolean;
  @Input()
  backgroundColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  borderColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  borderRadius?: number;
  @Input()
  borderWidth?: number;
  @Input()
  changeDecimals?: number;
  @Input()
  className?: string;
  @Input()
  dateTimeLabelFormats?: TooltipDateTimeLabelFormatsOptions | Dictionary<string>;
  @Input()
  enabled?: boolean;
  @Input()
  followPointer?: boolean;
  @Input()
  followTouchMove?: boolean;
  @Input()
  footerFormat?: string;
  @Input()
  formatter?: TooltipFormatterCallbackFunction;
  @Input()
  headerFormat?: string;
  @Input()
  headerShape?: OptionsHeaderShapeValue;
  @Input()
  hideDelay?: number;
  @Input()
  nullFormat?: string;
  @Input()
  nullFormatter?: TooltipFormatterCallbackFunction;
  @Input()
  outside?: boolean | undefined;
  @Input()
  padding?: number;
  @Input()
  pointFormat?: string;
  @Input()
  pointFormatter?: FormatterCallbackFunction<Point>;
  @Input()
  positioner?: TooltipPositionerCallbackFunction;
  @Input()
  shadow?: boolean | ShadowOptionsObject;
  @Input()
  shape?: TooltipShapeValue;
  @Input()
  shared?: boolean;
  @Input()
  snap?: number;
  @Input()
  split?: boolean;
  @Input()
  style?: CSSObject;
  @Input()
  useHTML?: boolean;
  @Input()
  valueDecimals?: number;
  @Input()
  valuePrefix?: string;
  @Input()
  valueSuffix?: string;
  @Input()
  xDateFormat?: string;

  private series: number = null;
  private initializedSub = new BehaviorSubject<boolean>(false);
  initialized$ = this.initializedSub.pipe(first(v => v));

  constructor(private chartService: HcChartService) {}

  ngOnInit() {}

  setSeries(index: number) {
    this.series = index;
    this.initializedSub.next(true);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.update(changesToFlat(changes));
  }

  update(props: Partial<TooltipOptions>) {
    this.initialized$.subscribe(v => {
      if (this.series !== null) {
        this.chartService.updateSeries(this.series, { tooltip: props } as any);
      } else {
        this.chartService.update({ tooltip: props });
      }
    });
  }
}
