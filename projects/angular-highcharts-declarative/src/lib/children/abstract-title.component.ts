import {
  AfterContentChecked,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { HcChartService } from '../hc-chart.service';
import { changesToFlat } from '../helpers';
import { AlignValue, CSSObject, SubtitleOptions, VerticalAlignValue } from 'highcharts';

export const hiddenStyles = [
  `
      :host {
        width: 0;
        height: 0;
        visibility: hidden;
      }
    `
];

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'hc-abstract-title',
  template: ''
})
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

  @ViewChild('text', { static: false }) childContent: ElementRef;

  constructor(private chartService: HcChartService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.update(changesToFlat(changes));
  }

  ngAfterContentChecked() {
    if (this.childContent && this.childContent.nativeElement && this.childContent.nativeElement.innerHTML) {
      this.update({ text: this.childContent.nativeElement.innerHTML });
    }
  }

  update(props: Partial<SubtitleOptions>) {
    this.chartService.update({ [this.key]: props });
  }
}
