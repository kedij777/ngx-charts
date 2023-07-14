import { ScaleType } from './scale-type.enum';

export interface LegendOptions {
  colors: any;
  domain: any[];
  position: LegendPosition;
  title: string;
  scaleType: ScaleType;
}

export enum LegendPosition {
  Right = 'right',
  Below = 'below'
}

export enum LegendType {
  ScaleLegend = 'scaleLegend',
  Legend = 'legend'
}

export enum LegendLabelStyle {
  Square = 'square',
  Circle = 'circle',
  Diamond = 'diamond',
  Ellipse = 'ellipse',
  Emoji = 'emoji'
}