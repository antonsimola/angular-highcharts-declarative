import { AfterContentChecked, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, Directive } from '@angular/core';
import { HcChartService } from '../hc-chart.service';
import { changesToFlat } from '../helpers';
import { AlignValue, CSSObject, SubtitleOptions, VerticalAlignValue } from 'highcharts';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class AbstractTitleComponent implements OnInit, OnChanges, AfterContentChecked {
  abstract key: string;
  @Input()
  align?: AlignValue;
  @Input()
  floating?: boolean;
  @Input()
  style?: CSSObject;
  @Input()
  text?: string;
  @Input()
  useHTML?: boolean;
  @Input()
  verticalAlign?: VerticalAlignValue;
  @Input()
  widthAdjust?: number;
  @Input()
  x?: number;
  @Input()
  y?: number;

  @ViewChild('text') childContent: ElementRef;

  prevInnerHtml :any= null;

  constructor(private chartService: HcChartService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.update(changesToFlat(changes));
  }

  ngAfterContentChecked() {
    if (this.childContent && this.childContent.nativeElement && this.childContent.nativeElement.innerHTML && this.childContent.nativeElement.innerHTML !== this.prevInnerHtml) {
      this.update({ text: this.childContent.nativeElement.innerHTML });
      this.prevInnerHtml = this.childContent.nativeElement.innerHTML;
    }
  }

  update(props: Partial<SubtitleOptions>) {
    this.chartService.update({ [this.key]: props });
  }
}
