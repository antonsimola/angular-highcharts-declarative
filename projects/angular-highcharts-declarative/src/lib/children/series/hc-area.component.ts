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
  PlotAreaAccessibilityOptions,
  PlotAreaAnimationOptions,
  PlotAreaConnectorsOptions,
  PlotAreaDataGroupingOptions,
  PlotAreaDragDropOptions,
  PlotAreaEventsOptions,
  PlotAreaLabelOptions,
  PlotAreaLastPriceOptions,
  PlotAreaLastVisiblePriceOptions,
  PlotAreaMarkerOptions,
  PlotAreaPointOptions,
  PlotAreaStatesOptions,
  PlotAreaTooltipOptions,
  PlotAreaZonesOptions,
  PlotSeriesOptions,
  SeriesAreaDataOptions,
  SeriesAreaOptions,
  SeriesLinecapValue,
  ShadowOptionsObject
} from 'highcharts';
import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-area',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: HcSeriesComponent, useExisting: HcAreaComponent }]

})
export class HcAreaComponent extends HcSeriesComponent implements OnInit, SeriesAreaOptions {
  @Input()
  accessibility?: object | PlotAreaAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotAreaAnimationOptions;
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
  connectors?: PlotAreaConnectorsOptions;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dashStyle?: DashStyleValue;
  @Input()
  dataGrouping?: PlotAreaDataGroupingOptions;
  @Input()
  dataLabels?: DataLabelsOptionsObject | Array<DataLabelsOptionsObject>;
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotAreaDragDropOptions;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotAreaEventsOptions;
  @Input()
  exposeElementToA11y?: boolean;
  @Input()
  fillColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  fillOpacity?: number;
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
  joinBy?: string | Array<string>;
  @Input()
  keys?: Array<string>;
  @Input()
  label?: PlotAreaLabelOptions;
  @Input()
  lastPrice?: PlotAreaLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotAreaLastVisiblePriceOptions;
  @Input()
  linecap?: SeriesLinecapValue;
  @Input()
  lineColor?: ColorString;
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: string;
  @Input()
  marker?: PlotAreaMarkerOptions;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  negativeColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  negativeFillColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotAreaPointOptions;
  @Input()
  pointDescriptionFormatter?: () => string;
  @Input()
  pointInterval?: number;
  @Input()
  pointIntervalUnit?: OptionsPointIntervalUnitValue;
  @Input()
  pointPlacement?: number | string;
  @Input()
  pointRange?: number;
  @Input()
  pointStart?: number;
  @Input()
  selected?: boolean;
  @Input()
  shadow?: boolean | ShadowOptionsObject;
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
  states?: PlotAreaStatesOptions;
  @Input()
  step?: OptionsStepValue;
  @Input()
  stickyTracking?: boolean;
  @Input()
  threshold?: number;
  @Input()
  tooltip?: PlotAreaTooltipOptions;
  @Input()
  trackByArea?: boolean;
  @Input()
  turboThreshold?: number;
  @Input()
  visible?: boolean;
  @Input()
  zIndex?: number;
  @Input()
  zoneAxis?: string;
  @Input()
  zones?: Array<PlotAreaZonesOptions>;
  @Input()
  data?: Array<number | [(number | string), (number | null)] | null | SeriesAreaDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;
  @Input()
  type: 'area' = 'area';
  @Input()
  useOhlcData?: undefined;

  constructor(chartService: HcChartService) {
    super(chartService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
