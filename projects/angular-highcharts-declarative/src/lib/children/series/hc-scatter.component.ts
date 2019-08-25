import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HcSeriesComponent } from '../hc-series.component';
import {
  AnimationOptionsObject,
  ColorString,
  CursorValue,
  DashStyleValue,
  DataLabelsOptionsObject,
  GradientColorObject,
  OptionsBoostBlendingValue,
  OptionsFindNearestPointByValue,
  OptionsGapUnitValue,
  OptionsPointIntervalUnitValue,
  OptionsStackingValue,
  OptionsStepValue,
  PatternObject,
  PlotScatterAccessibilityOptions,
  PlotScatterAnimationOptions,
  PlotScatterConnectorsOptions,
  PlotScatterDataGroupingOptions,
  PlotScatterDragDropOptions,
  PlotScatterEventsOptions,
  PlotScatterJitterOptions,
  PlotScatterLabelOptions,
  PlotScatterLastPriceOptions,
  PlotScatterLastVisiblePriceOptions,
  PlotScatterMarkerOptions,
  PlotScatterPointOptions,
  PlotScatterStatesOptions,
  PlotScatterTooltipOptions,
  PlotScatterZonesOptions,
  PlotSeriesOptions,
  SeriesLinecapValue,
  SeriesScatterDataOptions,
  SeriesScatterOptions
} from 'highcharts';
import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-scatter',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: HcSeriesComponent, useExisting: HcScatterComponent }]

})
export class HcScatterComponent extends HcSeriesComponent implements OnInit, SeriesScatterOptions {
  @Input()
  accessibility?: object | PlotScatterAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotScatterAnimationOptions;
  @Input()
  animationLimit?: number;
  @Input()
  boostBlending?: OptionsBoostBlendingValue;
  @Input()
  boostThreshold?: number;
  @Input()
  borderColor?: ColorString;
  @Input()
  borderWidth?: number;
  @Input()
  className?: string;
  @Input()
  clip?: boolean;
  @Input()
  color?: ColorString | GradientColorObject | PatternObject;
  @Input()
  colorAxis?: boolean;
  @Input()
  colorIndex?: number;
  @Input()
  compare?: string;
  @Input()
  compareBase?: 0 | 100;
  @Input()
  compareStart?: boolean;
  @Input()
  connectEnds?: boolean;
  @Input()
  connectNulls?: boolean;
  @Input()
  connectors?: PlotScatterConnectorsOptions;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dashStyle?: DashStyleValue;
  @Input()
  dataGrouping?: PlotScatterDataGroupingOptions;
  @Input()
  dataLabels?: DataLabelsOptionsObject | Array<DataLabelsOptionsObject>;
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotScatterDragDropOptions;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotScatterEventsOptions;
  @Input()
  exposeElementToA11y?: boolean;
  @Input()
  findNearestPointBy?: OptionsFindNearestPointByValue;
  @Input()
  gapSize?: number;
  @Input()
  gapUnit?: OptionsGapUnitValue;
  @Input()
  getExtremesFromAll?: boolean;
  @Input()
  includeInDataExport?: boolean;
  @Input()
  jitter?: PlotScatterJitterOptions;
  @Input()
  joinBy?: string | Array<string>;
  @Input()
  keys?: Array<string>;
  @Input()
  label?: PlotScatterLabelOptions;
  @Input()
  lastPrice?: PlotScatterLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotScatterLastVisiblePriceOptions;
  @Input()
  linecap?: SeriesLinecapValue;
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: string;
  @Input()
  marker?: PlotScatterMarkerOptions;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  negativeColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotScatterPointOptions;
  @Input()
  pointDescriptionFormatter?: () => string;
  @Input()
  pointInterval?: number;
  @Input()
  pointIntervalUnit?: OptionsPointIntervalUnitValue;
  @Input()
  pointRange?: number;
  @Input()
  pointStart?: number;
  @Input()
  selected?: boolean;
  @Input()
  showCheckbox?: boolean;
  @Input()
  showInLegend?: boolean;
  @Input()
  showInNavigator?: boolean;
  @Input()
  skipKeyboardNavigation?: boolean;
  @Input()
  softThreshold?: boolean;
  @Input()
  stacking?: OptionsStackingValue;
  states?: PlotScatterStatesOptions;
  @Input()
  step?: OptionsStepValue;
  @Input()
  stickyTracking?: boolean;
  @Input()
  threshold?: number;
  @Input()
  tooltip?: PlotScatterTooltipOptions;
  @Input()
  turboThreshold?: number;
  @Input()
  visible?: boolean;
  @Input()
  zIndex?: number;
  @Input()
  zoneAxis?: string;
  @Input()
  zones?: Array<PlotScatterZonesOptions>;

  @Input()
  data?: Array<number | [(number | string), (number | null)] | null | SeriesScatterDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;

  type: 'scatter' = 'scatter';

  constructor(chartService: HcChartService) {
    super(chartService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
