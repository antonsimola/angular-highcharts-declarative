import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {
  AnimationOptionsObject,
  Chart,
  Chart3dOptions,
  ChartAddSeriesEventObject,
  ChartClickEventObject,
  ChartEventsOptions,
  ChartOptions,
  ChartParallelAxesOptions,
  ChartResetZoomButtonOptions,
  ChartScrollablePlotAreaOptions,
  ChartSelectionContextObject,
  ColorString,
  CSSObject,
  DrilldownEventObject,
  DrillupEventObject,
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
import { BehaviorSubject, Subscription } from 'rxjs';
import { HcTitleComponent } from './children/hc-title.component';
import { HcSubtitleComponent } from './children/hc-subtitle.component';
import { HC_CHART_TYPES } from './highchart-enums';
import { HcLegendComponent } from './children/hc-legend.component';
import { HcTooltipComponent } from './children/hc-tooltip.component';
import { registerEvents } from './helpers';

export const HC_CHART_DEFAULTS = new InjectionToken<ChartOptions>('HC_CHART_DEFAULTS');

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
  @Input()
  extra: any;

  @Output() clickChart = new EventEmitter<ChartClickEventObject>();
  @Output() addSeries = new EventEmitter<ChartAddSeriesEventObject>();
  @Output() afterPrint = new EventEmitter<Event>();
  @Output() beforePrint = new EventEmitter<Event>();
  @Output() drilldown = new EventEmitter<DrilldownEventObject>();
  @Output() drillup = new EventEmitter<DrillupEventObject>();
  @Output() drillupall = new EventEmitter<DrillupEventObject>();
  @Output() loadChart = new EventEmitter<Event>();
  @Output() redraw = new EventEmitter<Event>();
  @Output() render = new EventEmitter<Event>();
  @Output() selection = new EventEmitter<ChartSelectionContextObject>();

  // my own chart ready
  @Output()
  chartReady = new EventEmitter<Chart>();

  // @Output()
  // childrenReady = new EventEmitter<Chart>();

  chartReady$ = this.chartService.chart$;
  private initializedSubject = new BehaviorSubject<boolean>(false);

  @ContentChildren(HcTitleComponent) private titles: QueryList<HcTitleComponent>;
  @ContentChildren(HcSubtitleComponent) private subtitles: QueryList<HcSubtitleComponent>;
  @ContentChildren(HcXAxisComponent) private xAxes: QueryList<HcXAxisComponent>;
  @ContentChildren(HcYAxisComponent) private yAxes: QueryList<HcYAxisComponent>;
  @ContentChildren(HcLegendComponent) private legends: QueryList<HcLegendComponent>;
  @ContentChildren(HcTooltipComponent) private tooltips: QueryList<HcTooltipComponent>;

  @ContentChildren(HcSeriesComponent, { descendants: true }) private series: QueryList<HcSeriesComponent>;

  @ViewChild('chartDiv', { static: true }) private chartDiv: ElementRef;
  private chartTypes = HC_CHART_TYPES;

  childrenInitializedSubs = [];
  private subs: Subscription[] = [];

  constructor(
    private zone: NgZone,
    private chartService: HcChartService,
    @Optional() @Inject(HC_CHART_DEFAULTS) private chartDefaults: ChartOptions
  ) {
  }

  ngOnInit() {
    const eventsToListen = registerEvents(this, this.zone, 'chart');
    if (this.chartDefaults) {
      for (const [key, value] of Object.entries(this.chartDefaults)) {
        if (this[key] === null) {
          // TODO this probably error prone...
          this[key] = value;
        }
      }
    }
    this.chartService.chart$.subscribe(c => {
      this.initializedSubject.next(true);
      this.chartReady.emit(c);
    });
    this.chartService.initChart(this.chartDiv, {
      chart: { ...this.getInitialState(), ...{ events: eventsToListen } },
      ...this.extra,
      tooltip: {} // hack to get tooltip to show, have to investigate better option
    });
  }

  getState() {
    const state = { ...this.chartDefaults, ...this, ...this.extra };
    delete state.series;
    delete state.subs;
    delete state.yAxes;
    delete state.xAxes;
    delete state.chartDiv;
    delete state.zone;
    delete state.chartService;
    delete state.titles;
    delete state.subtitles;
    delete state.legends;
    delete state.tooltips;
    delete state.chartDefaults;
    delete state.chartReady;
    delete state.childrenReady;
    delete state.chartReady$;
    delete state.initializedSubject;
    delete state.chartTypes;
    delete state.extra;
    delete state.childrenInitializedSubs;
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
    this.subs.forEach(s => s.unsubscribe());
    this.chartService.destroyChart();
  }

  initChild(key: string) {
    if (!this[key]) {
      return;
    }
    this[key].forEach(s => this.childrenInitializedSubs.push(s.initialized$));
    this[key].forEach((s, ind) => s.init(ind));
    this.subs.push(
      this[key].changes.subscribe(_ => {
        this[key].forEach((s, ind) => s.init(ind));
      })
    );
  }

  ngAfterContentInit() {
    const componentThis = this;

    this.zone.runOutsideAngular(() => {
      this.tooltips.forEach(t => t.setSeries(null));
      ['series', 'xAxes', 'yAxes'].forEach(key => this.initChild.bind(componentThis)(key));
      // combineLatest(...this.childrenInitializedSubs).subscribe(_ => this.chartReady$.subscribe(c => this.childrenReady.emit(c)));
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
    let extra: any = {};
    if (simpleChanges.extra) {
      extra = simpleChanges.extra.currentValue;
    }
    this.chartService.update({ chart: changes, ...extra });
  }
}
