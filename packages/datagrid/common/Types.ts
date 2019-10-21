export interface IDataItem {
  type?: 'C' | 'U' | 'D';
  value: [] | { [key: string]: any };
  changed?: { [key: string]: any };
  selected?: boolean;
}

type DataMap = Map<number, IDataItem>;
interface DataObj {
  [key: number]: IDataItem;
}
export type IData = DataMap | DataObj;

export interface IColumn {
  key?: string;
  label?: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right' | string;
  colSpan?: number;
  rowSpan?: number;
  colIndex?: number;
  rowIndex?: number;
  formatter?: number;
  collector?: number;
  editor?: any;
  _sx?: number;
  _ex?: number;
  _width?: number;
  attr?: string;
  depth?: number;
}

export interface IDatagridCommonProps {
  style?: React.CSSProperties;
}

export interface IDatagridProps extends IDatagridCommonProps {
  cssClassName?: string;
  width?: number;
  height?: number;
  columns?: IColumn[];
  data?: IData;
  dataLength?: number;
  loading?: boolean;
  loadingData?: boolean;
  selection?: any;
  scrollLeft?: number;
  scrollTop?: number;
  headerHeight?: number;
  headerAlign?: 'left' | 'center' | 'right';
  bodyRowHeight?: number;
  bodyAlign?: 'left' | 'center' | 'right';
  showLineNumber?: boolean;
  lineNumberColumnWidth?: number;
  lineNumberStartAt?: number;
  onScroll?: () => void;
  onClick?: () => void;
}

export interface IDatagridHeader extends IDatagridCommonProps {}
export interface IDatagridBody extends IDatagridCommonProps {}

export interface IDatagridContext extends IDatagridProps {
  _columns?: IColumn[];
  _scrollLeft?: number;
  _scrollTop?: number;
}
