import { ChangeDetectionStrategy, Component, Input, NgZone, OnInit } from '@angular/core';
import { HcSeriesComponent } from '../hc-series.component';
import {
  AnimationOptionsObject,
  ColorString,
  CursorValue,
  DashStyleValue,
  GradientColorObject,
  OptionsBoostBlendingValue,
  OptionsFindNearestPointByValue,
  OptionsGapUnitValue,
  OptionsPointIntervalUnitValue,
  OptionsStepValue,
  PatternObject,
  PlotArearangeAccessibilityOptions,
  PlotArearangeAnimationOptions,
  PlotArearangeConnectorsOptions,
  PlotArearangeDataGroupingOptions,
  PlotArearangeDragDropOptions,
  PlotArearangeEventsOptions,
  PlotArearangeLabelOptions,
  PlotArearangeLastPriceOptions,
  PlotArearangeLastVisiblePriceOptions,
  PlotArearangeMarkerOptions,
  PlotArearangePointOptions,
  PlotArearangeStatesOptions,
  PlotArearangeTooltipOptions,
  PlotArearangeZonesOptions,
  PlotSeriesOptions,
  SeriesAreaRangeDataLabelsOptionsObject,
  SeriesArearangeDataOptions,
  SeriesArearangeOptions,
  SeriesLinecapValue,
  ShadowOptionsObject
} from 'highcharts';
import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-arearange',
  template: `
    <ng-content select="hc-tooltip"></ng-content>
    <ng-content select="hc-point"></ng-content>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: HcSeriesComponent, useExisting: HcArearangeComponent }]
})
export class HcArearangeComponent extends HcSeriesComponent implements OnInit, SeriesArearangeOptions {
  @Input()
  accessibility?: object | PlotArearangeAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotArearangeAnimationOptions;
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
  connectors?: PlotArearangeConnectorsOptions;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dashStyle?: DashStyleValue;
  @Input()
  dataGrouping?: PlotArearangeDataGroupingOptions;
  @Input()
  dataLabels?: SeriesAreaRangeDataLabelsOptionsObject | Array<SeriesAreaRangeDataLabelsOptionsObject>;
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotArearangeDragDropOptions;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotArearangeEventsOptions;
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
  label?: PlotArearangeLabelOptions;
  @Input()
  lastPrice?: PlotArearangeLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotArearangeLastVisiblePriceOptions;
  @Input()
  linecap?: SeriesLinecapValue;
  @Input()
  lineColor?: ColorString;
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: string;
  @Input()
  marker?: PlotArearangeMarkerOptions;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  negativeColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  negativeFillColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotArearangePointOptions;
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
  states?: PlotArearangeStatesOptions;
  @Input()
  step?: OptionsStepValue;
  @Input()
  stickyTracking?: boolean;
  @Input()
  threshold?: any;
  @Input()
  tooltip?: PlotArearangeTooltipOptions;
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
  zones?: Array<PlotArearangeZonesOptions>;
  @Input()
  data?: Array<[(number | string), number] | [(number | string), number, number] | SeriesArearangeDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;
  @Input()
  stack?: undefined;
  @Input()
  type: 'arearange' = 'arearange';

  constructor(chartService: HcChartService, zone: NgZone) {
    super(chartService, zone);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
