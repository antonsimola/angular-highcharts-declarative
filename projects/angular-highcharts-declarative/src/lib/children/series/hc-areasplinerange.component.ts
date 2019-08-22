import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
  PatternObject,
  PlotAreasplinerangeAccessibilityOptions,
  PlotAreasplinerangeAnimationOptions,
  PlotAreasplinerangeConnectorsOptions,
  PlotAreasplinerangeDataGroupingOptions,
  PlotAreasplinerangeDragDropOptions,
  PlotAreasplinerangeEventsOptions,
  PlotAreasplinerangeLabelOptions,
  PlotAreasplinerangeLastPriceOptions,
  PlotAreasplinerangeLastVisiblePriceOptions,
  PlotAreasplinerangeMarkerOptions,
  PlotAreasplinerangePointOptions,
  PlotAreasplinerangeStatesOptions,
  PlotAreasplinerangeTooltipOptions,
  PlotAreasplinerangeZonesOptions,
  PlotSeriesOptions,
  SeriesAreaRangeDataLabelsOptionsObject,
  SeriesAreasplinerangeDataOptions,
  SeriesAreasplinerangeOptions,
  SeriesLinecapValue,
  ShadowOptionsObject
} from 'highcharts';

import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-areasplinerange',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcAreasplinerangeComponent extends HcSeriesComponent implements OnInit, SeriesAreasplinerangeOptions {
  @Input()
  accessibility?: object | PlotAreasplinerangeAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotAreasplinerangeAnimationOptions;
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
  connectors?: PlotAreasplinerangeConnectorsOptions;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dashStyle?: DashStyleValue;
  @Input()
  dataGrouping?: PlotAreasplinerangeDataGroupingOptions;
  @Input()
  dataLabels?: SeriesAreaRangeDataLabelsOptionsObject | Array<SeriesAreaRangeDataLabelsOptionsObject>;
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotAreasplinerangeDragDropOptions;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotAreasplinerangeEventsOptions;
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
  label?: PlotAreasplinerangeLabelOptions;
  @Input()
  lastPrice?: PlotAreasplinerangeLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotAreasplinerangeLastVisiblePriceOptions;
  @Input()
  linecap?: SeriesLinecapValue;
  @Input()
  lineColor?: ColorString;
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: string;
  @Input()
  marker?: PlotAreasplinerangeMarkerOptions;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  negativeColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  negativeFillColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotAreasplinerangePointOptions;
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
  states?: PlotAreasplinerangeStatesOptions;
  @Input()
  stickyTracking?: boolean;
  @Input()
  threshold?: any;
  @Input()
  tooltip?: PlotAreasplinerangeTooltipOptions;
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
  zones?: Array<PlotAreasplinerangeZonesOptions>;

  @Input()
  data?: Array<[(number | string), number] | [(number | string), number, number] | SeriesAreasplinerangeDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;
  @Input()
  stack?: undefined;
  type: 'areasplinerange' = 'areasplinerange';

  constructor(chartService: HcChartService) {
    super(chartService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
