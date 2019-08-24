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
import {HcChartService} from './hc-chart.service';
import {HcSeriesComponent} from './children/hc-series.component';
import {HcXAxisComponent} from './children/hc-x-axis.component';
import {HcYAxisComponent} from './children/hc-y-axis.component';
import {BehaviorSubject} from 'rxjs';
import {HcTitleComponent} from './children/hc-title.component';
import {HcSubtitleComponent} from './children/hc-subtitle.component';
import {HC_CHART_TYPES} from './highchart-enums';
import {HcAreaComponent} from './children/series/hc-area.component';
import {HcArearangeComponent} from './children/series/hc-arearange.component';
import {HcLineComponent} from './children/series/hc-line.component';
import {HcBarComponent} from './children/series/hc-bar.component';
import {HcScatterComponent} from './children/series/hc-scatter.component';
import {HcColumnComponent} from './children/series/hc-column.component';
import {HcPieComponent} from './children/series/hc-pie.component';
import {HcAreasplinerangeComponent} from './children/series/hc-areasplinerange.component';
import {HcColumnrangeComponent} from './children/series/hc-columnrange.component';
import {HcAreasplineComponent} from './children/series/hc-areaspline.component';
import {HcSplineComponent} from './children/series/hc-spline.component';
import {HcBubbleComponent} from './children/series/hc-bubble.component';

export const HC_CHART_DEFAULTS = new InjectionToken<ChartOptions>('HC_CHART_DEFAULTS');

@Component({
  selector: 'hc-chart',
  templateUrl: 'hc-chart.component.html',
  styles: [],
  providers: [HcChartService], // ChartService per component
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
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

  @Output()
  chartReady = new EventEmitter<Chart>();
  @Output()
  childrenReady = new EventEmitter<Chart>();

  chartReady$ = this.chartService.chart$;
  private initializedSubject = new BehaviorSubject<boolean>(false);

  @ContentChildren(HcTitleComponent) private titles: QueryList<HcTitleComponent>;
  @ContentChildren(HcSubtitleComponent) private subtitles: QueryList<HcSubtitleComponent>;
  @ContentChildren(HcXAxisComponent) private xAxes: QueryList<HcXAxisComponent>;
  @ContentChildren(HcYAxisComponent) private yAxes: QueryList<HcYAxisComponent>;
  @ContentChildren(HcSeriesComponent) private series: QueryList<HcSeriesComponent>;

  @ContentChildren(HcAreaComponent) private areas: QueryList<HcAreaComponent>;
  @ContentChildren(HcArearangeComponent) private arearanges: QueryList<HcArearangeComponent>;
  @ContentChildren(HcAreasplineComponent) private areasplines: QueryList<HcAreasplineComponent>;
  @ContentChildren(HcAreasplinerangeComponent) private areasplineranges: QueryList<HcAreasplinerangeComponent>;
  @ContentChildren(HcBarComponent) private bars: QueryList<HcBarComponent>;
  // @ContentChildren(HcBellcurveComponent) private bellcurves: QueryList<HcBellcurveComponent>;
  // @ContentChildren(HcBoxplotComponent) private boxplots: QueryList<HcBoxplotComponent>;
  @ContentChildren(HcBubbleComponent) private bubbles: QueryList<HcBubbleComponent>;
  // @ContentChildren(HcBulletComponent) private bullets: QueryList<HcBulletComponent>;
  @ContentChildren(HcColumnComponent) private columns: QueryList<HcColumnComponent>;
  // @ContentChildren(HcColumnpyramidComponent) private columnpyramids: QueryList<HcColumnpyramidComponent>;
  @ContentChildren(HcColumnrangeComponent) private columnranges: QueryList<HcColumnrangeComponent>;
  // @ContentChildren(HcCylinderComponent) private cylinders: QueryList<HcCylinderComponent>;
  // @ContentChildren(HcDependencywheelComponent) private dependencywheels: QueryList<HcDependencywheelComponent>;
  // @ContentChildren(HcErrorbarComponent) private errorbars: QueryList<HcErrorbarComponent>;
  // @ContentChildren(HcFunnelComponent) private funnels: QueryList<HcFunnelComponent>;
  // @ContentChildren(HcFunnel3dComponent) private funnel3ds: QueryList<HcFunnel3dComponent>;
  // @ContentChildren(HcGaugeComponent) private gauges: QueryList<HcGaugeComponent>;
  // @ContentChildren(HcHeatmapComponent) private heatmaps: QueryList<HcHeatmapComponent>;
  // @ContentChildren(HcHistogramComponent) private histograms: QueryList<HcHistogramComponent>;
  // @ContentChildren(HcItemComponent) private items: QueryList<HcItemComponent>;
  @ContentChildren(HcLineComponent) private lines: QueryList<HcLineComponent>;
  // @ContentChildren(HcNetworkgraphComponent) private networkgraphs: QueryList<HcNetworkgraphComponent>;
  // @ContentChildren(HcOrganizationComponent) private organizations: QueryList<HcOrganizationComponent>;
  // @ContentChildren(HcPackedbubbleComponent) private packedbubbles: QueryList<HcPackedbubbleComponent>;
  // @ContentChildren(HcParetoComponent) private paretos: QueryList<HcParetoComponent>;
  @ContentChildren(HcPieComponent) private pies: QueryList<HcPieComponent>;
  // @ContentChildren(HcPolygonComponent) private polygons: QueryList<HcPolygonComponent>;
  // @ContentChildren(HcPyramidComponent) private pyramids: QueryList<HcPyramidComponent>;
  // @ContentChildren(HcPyramid3dComponent) private pyramid3ds: QueryList<HcPyramid3dComponent>;
  // @ContentChildren(HcSankeyComponent) private sankeys: QueryList<HcSankeyComponent>;
  @ContentChildren(HcScatterComponent) private scatters: QueryList<HcScatterComponent>;
  // @ContentChildren(HcScatter3dComponent) private scatter3ds: QueryList<HcScatter3dComponent>;
  // @ContentChildren(HcSolidgaugeComponent) private solidgauges: QueryList<HcSolidgaugeComponent>;
  @ContentChildren(HcSplineComponent) private splines: QueryList<HcSplineComponent>;
  // @ContentChildren(HcStreamgraphComponent) private streamgraphs: QueryList<HcStreamgraphComponent>;
  // @ContentChildren(HcSunburstComponent) private sunbursts: QueryList<HcSunburstComponent>;
  // @ContentChildren(HcTilemapComponent) private tilemaps: QueryList<HcTilemapComponent>;
  // @ContentChildren(HcTimelineComponent) private timelines: QueryList<HcTimelineComponent>;
  // @ContentChildren(HcTreemapComponent) private treemaps: QueryList<HcTreemapComponent>;
  // @ContentChildren(HcVariablepieComponent) private variablepies: QueryList<HcVariablepieComponent>;
  // @ContentChildren(HcVariwideComponent) private variwides: QueryList<HcVariwideComponent>;
  // @ContentChildren(HcVectorComponent) private vectors: QueryList<HcVectorComponent>;
  // @ContentChildren(HcVennComponent) private venns: QueryList<HcVennComponent>;
  // @ContentChildren(HcWaterfallComponent) private waterfalls: QueryList<HcWaterfallComponent>;
  // @ContentChildren(HcWindbarbComponent) private windbarbs: QueryList<HcWindbarbComponent>;
  // @ContentChildren(HcWordcloudComponent) private wordclouds: QueryList<HcWordcloudComponent>;
  // @ContentChildren(HcXrangeComponent) private xranges: QueryList<HcXrangeComponent>;

  @ViewChild('chartDiv', {static: true}) private chartDiv: ElementRef;
  private chartTypes = HC_CHART_TYPES;

  childrenInitializedSubs = [];

  constructor(
    private zone: NgZone,
    private chartService: HcChartService,
    @Optional() @Inject(HC_CHART_DEFAULTS) private chartDefaults: ChartOptions
  ) {
  }

  ngOnInit() {
    if (this.chartDefaults) {
      for (const [key, value] of Object.entries(this.chartDefaults)) {
        this[key] = value;
      }
    }
    this.chartService.chart$.subscribe(c => {
      this.initializedSubject.next(true);
      this.chartReady.emit(c);
    });
    this.chartService.initChart(this.chartDiv, {chart: this.getInitialState()});
  }

  getState() {
    const state = {...this, ...this.chartDefaults, ...this.extra};
    delete state.series;
    delete state.yAxes;
    delete state.xAxes;
    delete state.chartDiv;
    delete state.zone;
    delete state.chartService;
    delete state.titles;
    delete state.subtitles;
    delete state.chartDefaults;
    this.chartTypes.map(t => t + 's').forEach(t => delete state[t]);
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
    if (!this[key]) {
      return;
    }
    this[key].forEach(s => this.childrenInitializedSubs.push(s.initialized$));
    this[key].forEach((s, ind) => s.init(ind));
    this[key].changes.subscribe(_ => {
      this[key].forEach((s, ind) => s.init(ind));
    });
  }

  ngAfterContentInit() {
    const componentThis = this;
    this.zone.runOutsideAngular(() => {
      ['series', 'xAxes', 'yAxes', ...this.chartTypes.map(t => t + 's')].forEach(key =>
        this.initChild.bind(componentThis)(key)
      );
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
    this.chartService.update({chart: changes});
  }
}
