import { ChangeDetectionStrategy, Component, Input, NgZone, OnInit } from '@angular/core';
import { HcSeriesComponent } from '../hc-series.component';
import {
  AnimationOptionsObject,
  ColorString,
  CursorValue,
  GradientColorObject,
  OptionsBoostBlendingValue,
  OptionsFindNearestPointByValue,
  OptionsPointIntervalUnitValue,
  PatternObject,
  PlotColumnrangeAccessibilityOptions,
  PlotColumnrangeAnimationOptions,
  PlotColumnrangeConnectorsOptions,
  PlotColumnrangeDataGroupingOptions,
  PlotColumnrangeDragDropOptions,
  PlotColumnrangeEventsOptions,
  PlotColumnrangeLabelOptions,
  PlotColumnrangeLastPriceOptions,
  PlotColumnrangeLastVisiblePriceOptions,
  PlotColumnrangePointOptions,
  PlotColumnrangeStatesOptions,
  PlotColumnrangeTooltipOptions,
  PlotColumnrangeZonesOptions,
  PlotSeriesOptions,
  SeriesAreaRangeDataLabelsOptionsObject,
  SeriesColumnrangeDataOptions,
  SeriesColumnrangeOptions,
  ShadowOptionsObject
} from 'highcharts';

import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-columnrange',
  template: `
    <ng-content select="hc-tooltip"></ng-content>
    <ng-content select="hc-point"></ng-content>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: HcSeriesComponent, useExisting: HcColumnrangeComponent }]
})
export class HcColumnrangeComponent extends HcSeriesComponent implements OnInit, SeriesColumnrangeOptions {
  @Input()
  accessibility?: object | PlotColumnrangeAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotColumnrangeAnimationOptions;
  @Input()
  animationLimit?: number;
  @Input()
  boostBlending?: OptionsBoostBlendingValue;
  @Input()
  boostThreshold?: number;
  @Input()
  borderColor?: ColorString;
  @Input()
  borderRadius?: number;
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
  colorByPoint?: boolean;
  @Input()
  colorIndex?: number;
  @Input()
  colors?: Array<ColorString | GradientColorObject | PatternObject>;
  @Input()
  compare?: string;
  @Input()
  compareBase?: 0 | 100;
  @Input()
  compareStart?: boolean;
  @Input()
  connectors?: PlotColumnrangeConnectorsOptions;
  @Input()
  crisp?: boolean;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dataGrouping?: PlotColumnrangeDataGroupingOptions;
  @Input()
  dataLabels?: SeriesAreaRangeDataLabelsOptionsObject | Array<SeriesAreaRangeDataLabelsOptionsObject>;
  @Input()
  depth?: number;
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotColumnrangeDragDropOptions;
  @Input()
  edgeColor?: ColorString;
  @Input()
  edgeWidth?: number;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotColumnrangeEventsOptions;
  @Input()
  exposeElementToA11y?: boolean;
  @Input()
  findNearestPointBy?: OptionsFindNearestPointByValue;
  @Input()
  getExtremesFromAll?: boolean;
  @Input()
  grouping?: boolean;
  @Input()
  groupPadding?: number;
  @Input()
  groupZPadding?: number;
  @Input()
  includeInDataExport?: boolean;
  @Input()
  joinBy?: string | Array<string>;
  @Input()
  keys?: Array<string>;
  @Input()
  label?: PlotColumnrangeLabelOptions;
  @Input()
  lastPrice?: PlotColumnrangeLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotColumnrangeLastVisiblePriceOptions;
  @Input()
  linkedTo?: string;
  @Input()
  maxPointWidth?: number;
  @Input()
  minPointLength?: number;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotColumnrangePointOptions;
  @Input()
  pointDescriptionFormatter?: () => string;
  @Input()
  pointInterval?: number;
  @Input()
  pointIntervalUnit?: OptionsPointIntervalUnitValue;
  @Input()
  pointPadding?: number;
  @Input()
  pointPlacement?: number | string;
  @Input()
  pointRange?: any;
  @Input()
  pointStart?: number;
  @Input()
  pointWidth?: number;
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
  states?: PlotColumnrangeStatesOptions;
  @Input()
  stickyTracking?: boolean;
  @Input()
  tooltip?: PlotColumnrangeTooltipOptions;
  @Input()
  turboThreshold?: number;
  @Input()
  visible?: boolean;
  @Input()
  zIndex?: number;
  @Input()
  zoneAxis?: string;
  @Input()
  zones?: Array<PlotColumnrangeZonesOptions>;

  @Input()
  data?: Array<[(number | string), number] | [(number | string), number, number] | SeriesColumnrangeDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;
  @Input()
  stack?: undefined;
  @Input()
  type: 'columnrange' = 'columnrange';

  constructor(chartService: HcChartService, zone: NgZone) {
    super(chartService, zone);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
