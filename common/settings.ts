import { IData, IColumn } from '@axui/datagrid/common/@interface';

export interface ISettings {
  width?: number;
  height?: number;
  headerHeight?: number;
  headerAlign?: 'left' | 'center' | 'right';
  bodyRowHeight?: number;
  bodyAlign?: 'left' | 'center' | 'right';

  columns?: IColumn[];
  data?: IData;
  scrollLeft?: number;
  scrollTop?: number;

  enableLineNumber?: boolean;
  lineNumberColumnWidth?: number;
  lineNumberStartAt?: number;

  enableFrozenCell?: boolean;
  frozenColumnIndex?: number;
  frozenRowIndex?: number;
}

export enum SettingsActionType {
  SET_WIDTH = 'width',
  SET_HEIGHT = 'height',
  SET_HEADER_HEIGHT = 'headerHeight',
  SET_HEADER_ALIGN = 'headerAlign',
  SET_BODY_ROW_HEIGHT = 'bodyRowHeight',
  SET_BODY_ALIGN = 'bodyAlign',
  SET_SCROLL_LEFT = 'scrollLeft',
  SET_SCROLL_TOP = 'scrollTop',
  SET_ENABLE_LINENUMBER = 'enableLineNumber',
  SET_LINENUMBER_COLUMN_WIDTH = 'lineNumberColumnWidth',
  SET_LINENUMBER_START_AT = 'lineNumberStartAt',
  SET_ENABLE_FROZEN_CELL = 'enableFrozenCell',
  SET_FROZEN_COLUMN_INDEX = 'frozenColumnIndex',
  SET_FROZEN_ROW_INDEX = 'frozenRowIndex',
  SET_COLUMNS = 'columns',
  SET_DATA = 'data',
}

export interface ISettingsAction {
  type: SettingsActionType;
  value?: any;
}

export type SettingsReducer = (
  state: ISettings,
  action: ISettingsAction,
) => ISettings;
