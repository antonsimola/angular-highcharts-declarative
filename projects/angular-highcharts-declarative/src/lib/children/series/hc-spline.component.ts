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
  PatternObject,
  PlotSeriesOptions,
  PlotSplineAccessibilityOptions,
  PlotSplineAnimationOptions,
  PlotSplineConnectorsOptions,
  PlotSplineDataGroupingOptions,
  PlotSplineDragDropOptions,
  PlotSplineEventsOptions,
  PlotSplineLabelOptions,
  PlotSplineLastPriceOptions,
  PlotSplineLastVisiblePriceOptions,
  PlotSplineMarkerOptions,
  PlotSplinePointOptions,
  PlotSplineStatesOptions,
  PlotSplineTooltipOptions,
  PlotSplineZonesOptions,
  SeriesLinecapValue,
  SeriesSplineDataOptions,
  SeriesSplineOptions,
  ShadowOptionsObject
} from 'highcharts';
import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-spline',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: HcSeriesComponent, useExisting: HcSplineComponent }]

})
export class HcSplineComponent extends HcSeriesComponent implements OnInit, SeriesSplineOptions {
  @Input()
  accessibility?: object | PlotSplineAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotSplineAnimationOptions;
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
  connectors?: PlotSplineConnectorsOptions;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dashStyle?: DashStyleValue;
  @Input()
  dataGrouping?: PlotSplineDataGroupingOptions;
  @Input()
  dataLabels?: DataLabelsOptionsObject | Array<DataLabelsOptionsObject>;
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotSplineDragDropOptions;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotSplineEventsOptions;
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
  joinBy?: string | Array<string>;
  @Input()
  keys?: Array<string>;
  @Input()
  label?: PlotSplineLabelOptions;
  @Input()
  lastPrice?: PlotSplineLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotSplineLastVisiblePriceOptions;
  @Input()
  linecap?: SeriesLinecapValue;
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: string;
  @Input()
  marker?: PlotSplineMarkerOptions;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  negativeColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotSplinePointOptions;
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
  states?: PlotSplineStatesOptions;
  @Input()
  stickyTracking?: boolean;
  @Input()
  threshold?: number;
  @Input()
  tooltip?: PlotSplineTooltipOptions;
  @Input()
  turboThreshold?: number;
  @Input()
  visible?: boolean;
  @Input()
  zIndex?: number;
  @Input()
  zoneAxis?: string;
  @Input()
  zones?: Array<PlotSplineZonesOptions>;

  @Input()
  data?: Array<number | [(number | string), (number | null)] | null | SeriesSplineDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;

  type: 'spline' = 'spline';

  constructor(chartService: HcChartService) {
    super(chartService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
