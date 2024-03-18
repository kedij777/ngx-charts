import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { NestedPieComponent } from './nested-pie.component';
import { PieChartModule } from '../pie-chart/pie-chart.module';

@NgModule({
  imports: [ChartCommonModule, PieChartModule],
  declarations: [NestedPieComponent],
  exports: [NestedPieComponent]
})
export class NestedPieModule {}