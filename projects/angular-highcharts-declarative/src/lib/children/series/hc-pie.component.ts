import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HcSeriesComponent } from '../hc-series.component';
import {
  AnimationOptionsObject,
  ColorString,
  CursorValue,
  GradientColorObject,
  OptionsBoostBlendingValue,
  OptionsGapUnitValue,
  PatternObject,
  PlotPieAccessibilityOptions,
  PlotPieAnimationOptions,
  PlotPieConnectorsOptions,
  PlotPieDataGroupingOptions,
  PlotPieDragDropOptions,
  PlotPieEventsOptions,
  PlotPieLastPriceOptions,
  PlotPieLastVisiblePriceOptions,
  PlotPiePointOptions,
  PlotPieStatesOptions,
  PlotPieTooltipOptions,
  PlotSeriesOptions,
  SeriesLinecapValue,
  SeriesPieDataLabelsOptionsObject,
  SeriesPieDataOptions,
  SeriesPieOptions,
  ShadowOptionsObject
} from 'highcharts';
import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-pie',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcPieComponent extends HcSeriesComponent implements OnInit, SeriesPieOptions {
  @Input()
  accessibility?: object | PlotPieAccessibilityOptions;
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: boolean | AnimationOptionsObject | PlotPieAnimationOptions;
  @Input()
  boostBlending?: OptionsBoostBlendingValue;
  @Input()
  borderColor?: ColorString;
  @Input()
  borderWidth?: number;
  @Input()
  center?: [(number|string|null), (number|string|null)];
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
  colors?: Array<ColorString | GradientColorObject | PatternObject>;
  @Input()
  compare?: string;
  @Input()
  compareBase?: 0 | 100;
  @Input()
  compareStart?: boolean;
  @Input()
  connectors?: PlotPieConnectorsOptions;
  @Input()
  cursor?: string | CursorValue;
  @Input()
  dataGrouping?: PlotPieDataGroupingOptions;
  @Input()
  dataLabels?: SeriesPieDataLabelsOptionsObject | Array<SeriesPieDataLabelsOptionsObject>;
  @Input()
  depth?: number;
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotPieDragDropOptions;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  endAngle?: number;
  @Input()
  events?: PlotPieEventsOptions;
  @Input()
  exposeElementToA11y?: boolean;
  @Input()
  gapSize?: number;
  @Input()
  gapUnit?: OptionsGapUnitValue;
  @Input()
  ignoreHiddenPoint?: boolean;
  @Input()
  includeInDataExport?: boolean;
  @Input()
  innerSize?: number | string;
  @Input()
  joinBy?: string | Array<string>;
  @Input()
  keys?: Array<string>;
  @Input()
  lastPrice?: PlotPieLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotPieLastVisiblePriceOptions;
  @Input()
  linecap?: SeriesLinecapValue;
  @Input()
  linkedTo?: string;
  @Input()
  minSize?: number;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  opacity?: number;
  @Input()
  point?: PlotPiePointOptions;
  @Input()
  pointDescriptionFormatter?: () => string;
  @Input()
  pointRange?: number;
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
  size?: number | string | null;
  @Input()
  skipKeyboardNavigation?: boolean;
  @Input()
  slicedOffset?: number;
  @Input()
  startAngle?: number;
  states?: PlotPieStatesOptions;
  @Input()
  stickyTracking?: boolean;
  @Input()
  tooltip?: PlotPieTooltipOptions;
  @Input()
  useOhlcData?: boolean;
  @Input()
  visible?: boolean;
  @Input()
  zIndex?: number;

  @Input()
  data?: Array<number | [string, (number | null)] | null | SeriesPieDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;
  @Input()
  stack?: undefined;
  @Input()
  xAxis?: undefined;
  @Input()
  yAxis?: undefined;
  @Input()
  type: 'pie' = 'pie';

  constructor(chartService: HcChartService) {
    super(chartService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
