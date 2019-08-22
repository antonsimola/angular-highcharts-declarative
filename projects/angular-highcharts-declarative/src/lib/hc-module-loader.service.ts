import { Inject, Injectable, InjectionToken } from '@angular/core';
import * as Highcharts from 'highcharts';

export const HC_MODULES = new InjectionToken<any[]>('highchartsextramodules');

@Injectable({ providedIn: 'root' })
export class HcModuleLoaderService {
  constructor(@Inject(HC_MODULES) private modules: any[]) {}
  load() {
    this.modules.forEach(m => m(Highcharts));
  }
}
