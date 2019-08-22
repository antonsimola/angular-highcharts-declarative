import { Directive, Input, OnInit } from '@angular/core';
import { HcSeriesComponent } from './hc-series.component';
import { HcXAxisComponent } from './hc-x-axis.component';
import { forkJoin } from 'rxjs';

@Directive({
  selector: 'hc-series[hcXAxis]'
})
export class HcXAxisDirective implements OnInit {
  @Input()
  hcXAxis: HcXAxisComponent;

  constructor(private series: HcSeriesComponent) {}

  ngOnInit() {
    forkJoin(this.series.initialized$, this.hcXAxis.initialized$).subscribe(v => {
      this.series.update({ xAxis: this.hcXAxis.index });
    });
  }
}
