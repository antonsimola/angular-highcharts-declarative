import { Directive, Input, OnInit } from '@angular/core';
import { HcSeriesComponent } from './hc-series.component';
import { forkJoin } from 'rxjs';
import { HcYAxisComponent } from './hc-y-axis.component';

@Directive({
    selector: 'hc-series[hcYAxis]'
})
export class HcYAxisDirective implements OnInit {
    @Input()
    hcYAxis: HcYAxisComponent;

    constructor(private series: HcSeriesComponent) {}

    ngOnInit() {
        forkJoin(this.series.initialized$, this.hcYAxis.initialized$).subscribe(_ => {
            this.series.update({ yAxis: this.hcYAxis.index });
        });
    }
}
