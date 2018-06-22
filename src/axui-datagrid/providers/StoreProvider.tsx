import * as React from 'react';
import { types } from '../stores';
import dataGridFormatter from '../functions/formatter';

export interface IDataGridStore extends types.DataGridState {
  dispatch: (store: types.DataGridState) => void;
  predefinedFormatter: types.DataGridFormatter;
}

const store: IDataGridStore = {
  data: [],
  filteredList: [],
  sortInfo: {},
  scrollLeft: 0,
  scrollTop: 0,
  selectionRows: {},
  selectionCols: {},
  focusedRow: -1,
  focusedCol: -1,

  colGroup: [],
  asideColGroup: [],
  leftHeaderColGroup: [],
  headerColGroup: [],

  asideHeaderData: { rows: [{ cols: [] }] },
  leftHeaderData: { rows: [{ cols: [] }] },
  headerData: { rows: [{ cols: [] }] },
  asideBodyRowData: { rows: [{ cols: [] }] },
  leftBodyRowData: { rows: [{ cols: [] }] },
  bodyRowData: { rows: [{ cols: [] }] },
  asideBodyGroupingData: { rows: [{ cols: [] }] },
  leftBodyGroupingData: { rows: [{ cols: [] }] },
  bodyGroupingData: { rows: [{ cols: [] }] },

  colGroupMap: {},
  bodyRowMap: {},
  bodyGroupingMap: {},

  options: {},
  styles: {},
  dispatch: () => {},
  predefinedFormatter: {},
};

const { Provider, Consumer } = React.createContext(store);

class StoreProvider extends React.Component<{}, types.DataGridState> {
  state = {};

  static getDerivedStateFromProps(
    props: IDataGridStore,
    prevState: types.DataGridState,
  ) {
    // 만일 속성별 컨트롤을 하겠다면 여기에서.
    return {
      ...prevState,
      ...{
        data: props.data,
        filteredList: props.filteredList,
        scrollLeft: props.scrollLeft,
        scrollTop: props.scrollTop,
        selectionRows: props.selectionRows,
        selectionCols: props.selectionCols,
        focusedRow: props.focusedRow,
        focusedCol: props.focusedCol,
        colGroup: props.colGroup,
        colGroupMap: props.colGroupMap,
        asideColGroup: props.asideColGroup,
        leftHeaderColGroup: props.leftHeaderColGroup,
        headerColGroup: props.headerColGroup,
        asideHeaderData: props.asideHeaderData,
        leftHeaderData: props.leftHeaderData,
        headerData: props.headerData,
        asideBodyRowData: props.asideBodyRowData,
        leftBodyRowData: props.leftBodyRowData,
        bodyRowData: props.bodyRowData,
        bodyRowMap: props.bodyRowMap,
        asideBodyGroupingData: props.asideBodyGroupingData,
        leftBodyGroupingData: props.leftBodyGroupingData,
        bodyGroupingData: props.bodyGroupingData,
        bodyGroupingMap: props.bodyGroupingMap,
        options: props.options,
        styles: props.styles,
      },
    };
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          ...{
            dispatch: state => this.setState(state),
            predefinedFormatter: { ...dataGridFormatter }
          },
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default { Provider: StoreProvider, Consumer };