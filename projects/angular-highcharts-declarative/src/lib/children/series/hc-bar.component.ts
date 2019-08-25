import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HcSeriesComponent } from '../hc-series.component';
import {
  AnimationOptionsObject,
  ColorString,
  CursorValue,
  DataLabelsOptionsObject,
  GradientColorObject,
  OptionsBoostBlendingValue,
  OptionsFindNearestPointByValue,
  OptionsPointIntervalUnitValue,
  OptionsStackingValue,
  PatternObject,
  PlotBarAccessibilityOptions,
  PlotBarAnimationOptions,
  PlotBarConnectorsOptions,
  PlotBarDataGroupingOptions,
  PlotBarDragDropOptions,
  PlotBarEventsOptions,
  PlotBarLabelOptions,
  PlotBarLastPriceOptions,
  PlotBarLastVisiblePriceOptions,
  PlotBarPointOptions,
  PlotBarStatesOptions,
  PlotBarTooltipOptions,
  PlotBarZonesOptions,
  PlotSeriesOptions,
  SeriesBarDataOptions,
  SeriesBarOptions,
  ShadowOptionsObject
} from 'highcharts';
import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-bar',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: HcSeriesComponent, useExisting: HcBarComponent }]

})
export class HcBarComponent extends HcSeriesComponent implements OnInit, SeriesBarOptions {
  @Input()
  accessibility?: object | PlotBarAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotBarAnimationOptions;
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
  connectors?: PlotBarConnectorsOptions;
  @Input()
  crisp?: boolean;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dataGrouping?: PlotBarDataGroupingOptions;
  @Input()
  dataLabels?: DataLabelsOptionsObject | Array<DataLabelsOptionsObject>;
  @Input()
  depth?: number;
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotBarDragDropOptions;
  @Input()
  edgeColor?: ColorString;
  @Input()
  edgeWidth?: number;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotBarEventsOptions;
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
  label?: PlotBarLabelOptions;
  @Input()
  lastPrice?: PlotBarLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotBarLastVisiblePriceOptions;
  @Input()
  linkedTo?: string;
  @Input()
  maxPointWidth?: number;
  @Input()
  minPointLength?: number;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  negativeColor?: ColorString | GradientColorObject | PatternObject;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotBarPointOptions;
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
  pointRange?: number | null;
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
  @Input()
  softThreshold?: boolean;
  @Input()
  stacking?: OptionsStackingValue;
  states?: PlotBarStatesOptions;
  @Input()
  stickyTracking?: boolean;
  @Input()
  threshold?: number;
  @Input()
  tooltip?: PlotBarTooltipOptions;
  @Input()
  turboThreshold?: number;
  @Input()
  visible?: boolean;
  @Input()
  zIndex?: number;
  @Input()
  zoneAxis?: string;
  @Input()
  zones?: Array<PlotBarZonesOptions>;

  @Input()
  data?: Array<number | [(number | string), (number | null)] | null | SeriesBarDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;

  type: 'bar' = 'bar';

  constructor(chartService: HcChartService) {
    super(chartService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
