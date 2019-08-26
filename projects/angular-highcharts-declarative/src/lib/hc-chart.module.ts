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
import { HcAreaComponent } from './children/series/hc-area.component';
import { HcArearangeComponent } from './children/series/hc-arearange.component';
import { HcLineComponent } from './children/series/hc-line.component';
import { HcBarComponent } from './children/series/hc-bar.component';
import { HcColumnComponent } from './children/series/hc-column.component';
import { HcPieComponent } from './children/series/hc-pie.component';
import { HcSplineComponent } from './children/series/hc-spline.component';
import { HcBubbleComponent } from './children/series/hc-bubble.component';
import { HcScatterComponent } from './children/series/hc-scatter.component';
import { HcAreasplineComponent } from './children/series/hc-areaspline.component';
import { HcAreasplinerangeComponent } from './children/series/hc-areasplinerange.component';
import { HcColumnrangeComponent } from './children/series/hc-columnrange.component';
import { HcLegendComponent } from './children/hc-legend.component';
import { HcTooltipComponent } from './children/hc-tooltip.component';
import { HcPointComponent } from './children/hc-point.component';

@NgModule({
  declarations: [
    HcChartComponent,
    HcSeriesComponent,
    HcTitleComponent,
    HcSubtitleComponent,
    HcXAxisComponent,
    HcYAxisComponent,
    HcXAxisDirective,
    HcYAxisDirective,
    HcAreaComponent,
    HcArearangeComponent,
    HcLineComponent,
    HcBarComponent,
    HcColumnComponent,
    HcPieComponent,
    HcSplineComponent,
    HcBubbleComponent,
    HcScatterComponent,
    HcAreasplineComponent,
    HcAreasplinerangeComponent,
    HcColumnrangeComponent,
    HcLegendComponent,
    HcTooltipComponent,
    HcPointComponent
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
    HcYAxisDirective,
    HcAreaComponent,
    HcArearangeComponent,
    HcLineComponent,
    HcBarComponent,
    HcColumnComponent,
    HcPieComponent,
    HcSplineComponent,
    HcBubbleComponent,
    HcScatterComponent,
    HcAreasplineComponent,
    HcAreasplinerangeComponent,
    HcColumnrangeComponent,
    HcLegendComponent,
    HcTooltipComponent,
    HcPointComponent
  ],
  providers: [{ provide: HC_MODULES, useValue: [] }]
})
export class HcChartModule {
  constructor(moduleLoader: HcModuleLoaderService) {
    moduleLoader.load();
  }
}
