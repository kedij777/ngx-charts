import {
    Component,
    Input,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
  } from '@angular/core';
  import { scaleBand } from 'd3-scale';

  import { BaseChartComponent } from '../common/base-chart.component';
  import { calculateViewDimensions } from '../common/view-dimensions.helper';
  import { ColorHelper } from '../common/color.helper';
  import { getScaleType } from '../common/domain.helper';
  import { LegendOptions, LegendPosition } from '../common/types/legend.model';
  import { ViewDimensions } from '../common/types/view-dimension.interface';
  import { ScaleType } from '../common/types/scale-type.enum';

@Component ({
    selector: 'ngx-charts-nested-pie',
    template: `
        <ngx-charts-chart
            [view]="[width, height]"
            [showLegend]="legend"
            [animations]="animations"
            [legendOptions]="legendOptions"
            (legendLabelClick)="onClick($event)"
        >
        <ngx-charts-pie-chart
            class = "outter"
            [view]="[outterWidth, outterHeight]"
            [scheme]="scheme"
            [results]="results"
            [animations]="animations"
            [legend]="showLegend"
            [legendTitle]="legendTitle"
            [explodeSlices]="explodeSlices"
            [labels]="labels"
            [doughnut]="true"
            [arcWidth]="arcWidth_outter"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
        >
        </ngx-charts-pie-chart>
    </ngx-charts-chart>

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['../common/base-chart.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class NestedPieComponent extends BaseChartComponent {

    @Input() view: [number, number];
    @Input() showLegend: boolean = false;
    @Input() legendOptions: LegendOptions;
    @Input() activeEntries: any[];
    @Input() animations: boolean = true;
    @Input() labels: boolean = false;
    @Input() legend: boolean = false;
    @Input() legendTitle: string = 'Legend';
    @Input() legendPosition: LegendPosition = LegendPosition.Right;
    @Input() explodeSlices: boolean = false;
    @Input() doughnut: boolean = false;
    @Input() arcWidth: number = 0.25;
    @Input() gradient: boolean;
    @Input() tooltipDisabled: boolean = false;
    @Input() labelFormatting: any;
    @Input() trimLabels: boolean = true;
    @Input() maxLabelLength: number = 10;
    @Input() tooltipText: any;
    @Output() dblclick = new EventEmitter();

    // optional margins
    @Input() margins: number[];
    @Output() select = new EventEmitter();
    @Output() activate = new EventEmitter();
    @Output() deactivate = new EventEmitter();

    colors: ColorHelper;
    transform: string;
    outterWidth: number = 1000;
    outterHeight: number = 500;
    arcWidth_outter: number = 0.1;


    update(): void {
        super.update();
    }

    onClick(data): void {
        this.select.emit(data);
    }


}