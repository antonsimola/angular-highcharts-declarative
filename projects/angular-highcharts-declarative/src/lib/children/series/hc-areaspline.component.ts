import { ChangeDetectionStrategy, Component, Input, NgZone, OnInit } from '@angular/core';
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
  PlotAreasplineAccessibilityOptions,
  PlotAreasplineAnimationOptions,
  PlotAreasplineConnectorsOptions,
  PlotAreasplineDataGroupingOptions,
  PlotAreasplineDragDropOptions,
  PlotAreasplineEventsOptions,
  PlotAreasplineLabelOptions,
  PlotAreasplineLastPriceOptions,
  PlotAreasplineLastVisiblePriceOptions,
  PlotAreasplineMarkerOptions,
  PlotAreasplinePointOptions,
  PlotAreasplineStatesOptions,
  PlotAreasplineTooltipOptions,
  PlotAreasplineZonesOptions,
  PlotSeriesOptions,
  SeriesAreasplineDataOptions,
  SeriesAreasplineOptions,
  SeriesLinecapValue,
  ShadowOptionsObject
} from 'highcharts';

import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-areaspline',
  template: `
    <ng-content select="hc-tooltip"></ng-content>
    <ng-content select="hc-point"></ng-content>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: HcSeriesComponent, useExisting: HcAreasplineComponent }]
})
export class HcAreasplineComponent extends HcSeriesComponent implements OnInit, SeriesAreasplineOptions {
  @Input()
  accessibility?: object | PlotAreasplineAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotAreasplineAnimationOptions;
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
  connectors?: PlotAreasplineConnectorsOptions;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dashStyle?: DashStyleValue;
  @Input()
  dataGrouping?: PlotAreasplineDataGroupingOptions;
  @Input()
  dataLabels?: DataLabelsOptionsObject | Array<DataLabelsOptionsObject>;
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotAreasplineDragDropOptions;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotAreasplineEventsOptions;
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
  label?: PlotAreasplineLabelOptions;
  @Input()
  lastPrice?: PlotAreasplineLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotAreasplineLastVisiblePriceOptions;
  @Input()
  linecap?: SeriesLinecapValue;
  @Input()
  lineColor?: ColorString;
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: string;
  @Input()
  marker?: PlotAreasplineMarkerOptions;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  negativeColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  negativeFillColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotAreasplinePointOptions;
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
  states?: PlotAreasplineStatesOptions;
  @Input()
  stickyTracking?: boolean;
  @Input()
  threshold?: number;
  @Input()
  tooltip?: PlotAreasplineTooltipOptions;
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
  zones?: Array<PlotAreasplineZonesOptions>;

  @Input()
  data?: Array<number | [(number | string), (number | null)] | null | SeriesAreasplineDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;

  type: 'areaspline' = 'areaspline';

  constructor(chartService: HcChartService, zone: NgZone) {
    super(chartService, zone);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
