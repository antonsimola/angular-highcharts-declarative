import { NgModule } from '@angular/core';
import { HcChartComponent } from './hc-chart.component';
import { HcSeriesComponent } from './children/hc-series.component';
import { HcTitleComponent } from './children/hc-title.component';
import { CommonModule } from '@angular/common';
import { HcXAxisComponent } from './children/hc-x-axis.component';
import { HcYAxisComponent } from './children/hc-y-axis.component';
import { HC_MODULES, HcModuleLoaderService } from './hc-module-loader.service';
import { HcSubtitleComponent } from './children/hc-subtitle.component';
import { HcXAxisDirective } from './children/hc-x-axis.directive';
import { HcYAxisDirective } from './children/hc-y-axis.directive';

@NgModule({
    declarations: [
        HcChartComponent,
        HcSeriesComponent,
        HcTitleComponent,
        HcSubtitleComponent,
        HcXAxisComponent,
        HcYAxisComponent,
        HcXAxisDirective,
        HcYAxisDirective
    ],
    imports: [CommonModule],
    exports: [
        HcChartComponent,
        HcSeriesComponent,
        HcTitleComponent,
        HcSubtitleComponent,
        HcXAxisComponent,
        HcYAxisComponent,
        HcXAxisDirective,
        HcYAxisDirective
    ],
    providers: [{ provide: HC_MODULES, useValue: [] }]
})
export class HcChartModule {
    constructor(moduleLoader: HcModuleLoaderService) {
        moduleLoader.load();
    }
}
