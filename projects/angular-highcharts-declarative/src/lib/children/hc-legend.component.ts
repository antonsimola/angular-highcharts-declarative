import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {changesToFlat} from '../helpers';
import {
  AlignValue,
  ColorString,
  CSSObject,
  FormatterCallbackFunction,
  GradientColorObject,
  LegendAccessibilityOptions,
  LegendBubbleLegendOptions,
  LegendNavigationOptions,
  LegendOptions,
  LegendTitleOptions,
  OptionsLayoutValue,
  PatternObject,
  Point,
  Series,
  SubtitleOptions,
  VerticalAlignValue
} from 'highcharts';
import {HcChartService} from '../hc-chart.service';

@Component({
  selector: 'hc-legend',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcLegendComponent implements OnInit, OnChanges, LegendOptions {

  @Input()
  accessibility?: (object|LegendAccessibilityOptions);
  @Input()
  align?: AlignValue;
  @Input()
  alignColumns?: boolean;
  @Input()
  backgroundColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  borderColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  borderRadius?: number;
  @Input()
  borderWidth?: number;
  @Input()
  bubbleLegend?: LegendBubbleLegendOptions;
  @Input()
  enabled?: boolean;
  @Input()
  floating?: boolean;
  @Input()
  itemCheckboxStyle?: CSSObject;
  @Input()
  itemDistance?: number;
  @Input()
  itemHiddenStyle?: CSSObject;
  @Input()
  itemHoverStyle?: CSSObject;
  @Input()
  itemMarginBottom?: number;
  @Input()
  itemMarginTop?: number;
  @Input()
  itemStyle?: CSSObject;
  @Input()
  itemWidth?: number;
  @Input()
  labelFormat?: string;
  @Input()
  labelFormatter?: FormatterCallbackFunction<(Point|Series)>;
  @Input()
  layout?: OptionsLayoutValue;
  @Input()
  margin?: number;
  @Input()
  maxHeight?: number;
  @Input()
  navigation?: LegendNavigationOptions;
  @Input()
  padding?: number;
  @Input()
  reversed?: boolean;
  @Input()
  rtl?: boolean;
  @Input()
  shadow?: (boolean|CSSObject);
  @Input()
  squareSymbol?: boolean;
  @Input()
  symbolHeight?: number;
  @Input()
  symbolPadding?: number;
  @Input()
  symbolRadius?: number;
  @Input()
  symbolWidth?: number;
  @Input()
  title?: LegendTitleOptions;
  @Input()
  useHTML?: boolean;
  @Input()
  verticalAlign?: VerticalAlignValue;
  @Input()
  width?: (number|string);
  @Input()
  x?: number;
  @Input()
  y?: number;

  constructor(private chartService: HcChartService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.update(changesToFlat(changes));
  }

  update(props: Partial<SubtitleOptions>) {
    this.chartService.update({ legend: props });
  }
}
