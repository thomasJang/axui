import * as types from './@types';

export interface IPosition {
  x?: number;
  y?: number;
}

export interface IRect extends IPosition {
  width: number;
  height?: number;
}

export interface ICol {
  key?: string;
  label?: string;
  width?: number | string;
  align?: types.ColTextAlign;
  colSpan?: number;
  rowSpan?: number;
}

export interface IDataGridEditingCell {
  row?: number;
  col?: number;
  editor?: any;
}

export interface IDataGridFormatterData {
  data?: any;
  item?: any;
  index?: number;
  key?: string;
  value?: any;
  options?: any;
}

export type formatterFunction = (formatterData: types.DataGridFormatterData) => any;

export interface IDataGridFormatter {
  [key: string]: formatterFunction;
}

export interface IDataGridCol extends ICol {
  colIndex?: number;
  rowIndex?: number;
  formatter?: formatterFunction | string;
  _ex?: number;
  _sx?: number;
  _width?: number;
  columnAttr?: string;
}

export interface IDataGridColumn extends ICol {
  colIndex?: number;
  rowIndex?: number;
  formatter?: formatterFunction | string;
  hidden?: boolean;
  columns?: IDataGridColumn[];
  depth?: number;
}

export interface IDataGridColumnKeys {
  selected?: string;
  modified?: string;
  deleted?: string;
  disableSelection?: string;
}