import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  AnimationOptionsObject,
  Chart,
  Chart3dOptions,
  ChartEventsOptions,
  ChartOptions,
  ChartParallelAxesOptions,
  ChartResetZoomButtonOptions,
  ChartScrollablePlotAreaOptions,
  ColorString,
  CSSObject,
  GradientColorObject,
  HTMLDOMElement,
  OptionsPanKeyValue,
  OptionsPinchTypeValue,
  OptionsZoomKeyValue,
  OptionsZoomTypeValue,
  PatternObject
} from 'highcharts';
import { HcChartService } from './hc-chart.service';
import { HcSeriesComponent } from './children/hc-series.component';
import { HcXAxisComponent } from './children/hc-x-axis.component';
import { HcYAxisComponent } from './children/hc-y-axis.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'hc-chart',
  templateUrl: 'hc-chart.component.html',
  styles: [],
  providers: [HcChartService], // ChartService per component
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcChartComponent implements OnInit, ChartOptions, OnChanges, OnDestroy, AfterContentInit {
  @Input()
  alignTicks?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject;
  @Input()
  backgroundColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  borderColor?: ColorString;
  @Input()
  borderRadius?: number;
  @Input()
  borderWidth?: number;
  @Input()
  className?: string;
  @Input()
  colorCount?: number;
  @Input()
  defaultSeriesType?: string;
  @Input()
  displayErrors?: boolean;
  @Input()
  events?: ChartEventsOptions;
  @Input()
  height?: number | string | null;
  @Input()
  ignoreHiddenSeries?: boolean;
  @Input()
  inverted?: boolean;
  @Input()
  map?: string | Array<any>;
  @Input()
  mapTransforms?: any;
  @Input()
  margin?: number | Array<number>;
  @Input()
  marginBottom?: number;
  @Input()
  marginLeft?: number;
  @Input()
  marginRight?: number;
  @Input()
  marginTop?: number;
  @Input()
  options3d?: Chart3dOptions;
  @Input()
  panKey?: OptionsPanKeyValue;
  @Input()
  panning?: boolean;
  @Input()
  parallelAxes?: ChartParallelAxesOptions;
  @Input()
  parallelCoordinates?: boolean;
  @Input()
  pinchType?: OptionsPinchTypeValue;
  @Input()
  plotBackgroundColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  plotBackgroundImage?: string;
  @Input()
  plotBorderColor?: ColorString;
  @Input()
  plotBorderWidth?: number;
  @Input()
  plotShadow?: boolean | CSSObject;
  @Input()
  polar?: boolean;
  @Input()
  reflow?: boolean;
  @Input()
  renderTo?: string | HTMLDOMElement;
  @Input()
  resetZoomButton?: ChartResetZoomButtonOptions;
  @Input()
  scrollablePlotArea?: ChartScrollablePlotAreaOptions;
  @Input()
  selectionMarkerFill?: ColorString;
  @Input()
  shadow?: boolean | CSSObject;
  @Input()
  showAxes?: boolean;
  @Input()
  spacing?: Array<number>;
  @Input()
  spacingBottom?: number;
  @Input()
  spacingLeft?: number;
  @Input()
  spacingRight?: number;
  @Input()
  spacingTop?: number;
  @Input()
  style?: CSSObject;
  @Input()
  styledMode?: boolean;
  @Input()
  type?: string;
  @Input()
  width?: number | string | null;
  @Input()
  zoomKey?: OptionsZoomKeyValue;
  @Input()
  zoomType?: OptionsZoomTypeValue;

  @Output()
  chartReady = new EventEmitter<Chart>();

  chartReady$ = this.chartService.chart$;
  private initializedSubject = new BehaviorSubject<boolean>(false);

  @ContentChildren(HcSeriesComponent) private series: QueryList<HcSeriesComponent>;
  @ContentChildren(HcXAxisComponent) private xAxes: QueryList<HcXAxisComponent>;
  @ContentChildren(HcYAxisComponent) private yAxes: QueryList<HcYAxisComponent>;
  @ViewChild('chartDiv', { static: true }) private chartDiv: ElementRef;

  constructor(private zone: NgZone, private chartService: HcChartService) {}

  ngOnInit() {
    this.chartService.chart$.subscribe(c => {
      this.initializedSubject.next(true);
      this.initializedSubject.complete();
      this.chartReady.emit(c);
    });
    this.chartService.initChart(this.chartDiv, { chart: this.getInitialState() });
  }

  getState() {
    const state = { ...this };
    delete state.series;
    delete state.yAxes;
    delete state.xAxes;
    delete state.chartDiv;
    delete state.zone;
    delete state.chartService;
    return state;
  }

  getInitialState() {
    const state = this.getState();
    for (const [key, value] of Object.entries(state)) {
      if (value === null) {
        delete state[key];
      }
    }
    return state;
  }

  ngOnDestroy() {
    this.chartService.destroyChart();
  }

  initChild(key: string) {
    this[key].forEach((s, ind) => s.init(ind));
    this[key].changes.subscribe(_ => {
      this[key].forEach((s, ind) => s.init(ind));
    });
  }

  ngAfterContentInit() {
    const componentThis = this;
    this.zone.runOutsideAngular(() => {
      ['series', 'xAxes', 'yAxes'].forEach(key => this.initChild.bind(componentThis)(key));
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (!this.initializedSubject.getValue()) {
      return;
    }
    const changes = {};
    for (const [key, value] of Object.entries(simpleChanges)) {
      changes[key] = value.currentValue;
    }
    this.chartService.update({ chart: changes });
  }
}
