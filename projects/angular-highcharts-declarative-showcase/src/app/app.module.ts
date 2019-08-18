import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SimpleComponent } from './simple/simple.component';
import { KitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { ExtraPropsComponent } from './extra-props/extra-props.component';

import { HcChartModule } from '../../../angular-highcharts-declarative/src/lib/hc-chart.module'; // this import is to make debug easier
// import { HcChartModule } from 'angular-highcharts-declarative'; // <<<< use this in consuming project
import { HC_MODULES } from '../../../angular-highcharts-declarative/src/lib/hc-module-loader.service';
import * as more from 'highcharts/highcharts-more.src';
import * as boost from 'highcharts/modules/boost.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as exportingData from 'highcharts/modules/export-data.src';
import * as bellcurve from 'highcharts/modules/histogram-bellcurve.src';
import * as heatmap from 'highcharts/modules/heatmap.src';
import * as cylinder from 'highcharts/modules/cylinder';
import * as dependencywheel from 'highcharts/modules/dependency-wheel.src';
import * as networkgraph from 'highcharts/modules/networkgraph.src';
import * as items from 'highcharts/modules/item-series.src';
import * as bullet from 'highcharts/modules/bullet.src';
import * as sankey from 'highcharts/modules/sankey.src';
import * as funnel from 'highcharts/modules/funnel.src';
import * as funnel3d from 'highcharts/modules/funnel3d';
import * as _3d from 'highcharts/highcharts-3d.src';
import { CodeComponent } from './code/code.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleRealtimeComponent } from './simple-realtime/simple-realtime.component';

@NgModule({
  declarations: [AppComponent, SimpleComponent, KitchenSinkComponent, ExtraPropsComponent, CodeComponent, SimpleRealtimeComponent],
  imports: [
    BrowserModule,
    HcChartModule, // <<<<<< basic use of highcharts components
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HC_MODULES, // <<<< this is how to import extra modules
      useValue: [
        more,
        _3d,
        boost,
        exporting,
        exportingData,
        items,
        bellcurve,
        heatmap,
        bullet,
        sankey,
        funnel,
        funnel3d,
        dependencywheel,
        cylinder,
        networkgraph
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
