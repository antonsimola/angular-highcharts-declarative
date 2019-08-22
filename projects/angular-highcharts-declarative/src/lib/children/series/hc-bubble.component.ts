import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HcSeriesComponent } from '../hc-series.component';
import {
  AnimationOptionsObject,
  BubbleSizeByValue,
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
  PlotBubbleAccessibilityOptions,
  PlotBubbleAnimationOptions,
  PlotBubbleConnectorsOptions,
  PlotBubbleDataGroupingOptions,
  PlotBubbleDragDropOptions,
  PlotBubbleEventsOptions,
  PlotBubbleJitterOptions,
  PlotBubbleLabelOptions,
  PlotBubbleLastPriceOptions,
  PlotBubbleLastVisiblePriceOptions,
  PlotBubbleMarkerOptions,
  PlotBubblePointOptions,
  PlotBubbleStatesOptions,
  PlotBubbleTooltipOptions,
  PlotBubbleZonesOptions,
  PlotSeriesOptions,
  SeriesBubbleDataOptions,
  SeriesBubbleOptions,
  SeriesLinecapValue
} from 'highcharts';
import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-bubble',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcBubbleComponent extends HcSeriesComponent implements OnInit, SeriesBubbleOptions {
  @Input()
  accessibility?: object | PlotBubbleAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotBubbleAnimationOptions;
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
  connectors?: PlotBubbleConnectorsOptions;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dashStyle?: DashStyleValue;
  @Input()
  dataGrouping?: PlotBubbleDataGroupingOptions;
  @Input()
  dataLabels?: DataLabelsOptionsObject | Array<DataLabelsOptionsObject>;
  @Input()
  description?: string;
  @Input()
  displayNegative?: boolean;
  @Input()
  dragDrop?: PlotBubbleDragDropOptions;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotBubbleEventsOptions;
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
  jitter?: PlotBubbleJitterOptions;
  @Input()
  joinBy?: string | Array<string>;
  @Input()
  keys?: Array<string>;
  @Input()
  label?: PlotBubbleLabelOptions;
  @Input()
  lastPrice?: PlotBubbleLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotBubbleLastVisiblePriceOptions;
  @Input()
  linecap?: SeriesLinecapValue;
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: string;
  @Input()
  marker?: PlotBubbleMarkerOptions;
  @Input()
  maxSize?: number | string;
  @Input()
  minSize?: number | string;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  negativeColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotBubblePointOptions;
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
  sizeBy?: BubbleSizeByValue;
  @Input()
  sizeByAbsoluteValue?: boolean;
  @Input()
  skipKeyboardNavigation?: boolean;
  @Input()
  softThreshold?: boolean;
  @Input()
  stacking?: OptionsStackingValue;
  states?: PlotBubbleStatesOptions;
  @Input()
  step?: OptionsStepValue;
  @Input()
  stickyTracking?: boolean;
  @Input()
  threshold?: number;
  @Input()
  tooltip?: PlotBubbleTooltipOptions;
  @Input()
  turboThreshold?: number;
  @Input()
  visible?: boolean;
  @Input()
  zIndex?: number;
  @Input()
  zMax?: number;
  @Input()
  zMin?: number;
  @Input()
  zoneAxis?: string;
  @Input()
  zones?: Array<PlotBubbleZonesOptions>;
  @Input()
  zThreshold?: number;

  @Input()
  data?: Array<[(number | string), number] | [(number | string), number, number] | SeriesBubbleDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;
  @Input()
  stack?: undefined;
  @Input()
  type: 'bubble' = 'bubble';

  constructor(chartService: HcChartService) {
    super(chartService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
