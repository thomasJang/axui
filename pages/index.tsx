import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  Reducer,
} from 'react';
import debounce from 'lodash/debounce';
import { Datagrid, DatagridHeader, DatagridBody } from '@axui/datagrid';
import { IData, IColumn } from '@axui/datagrid/common/@interface';
import 'styles/global';
import '@axui/datagrid/scss/style.scss';
import { LayoutRoot, Nav, ControlBox, Viewer } from 'layouts';
import { ISettings, SettingsActionType } from 'common/settings';
import settingsReducer from 'reducer/settingsReducer';
import Settings from 'components/Settings';

const initialSettings: ISettings = {
  columns: [{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }],
  data: [
    { value: { id: '1', name: 'tom' } },
    { value: { id: '2', name: 'seowoo' } },
  ],
};
const Home: React.FC = props => {
  const [settings, dispatchSettings] = useReducer(
    settingsReducer,
    initialSettings,
  );

  const {
    width = 400,
    height = 300,
    headerHeight = 30,
    headerAlign,
    bodyRowHeight,
    bodyAlign,
    enableLineNumber,
    lineNumberColumnWidth,
    lineNumberStartAt,
    enableFrozenCell,
    frozenColumnIndex = 1,
    frozenRowIndex = 1,
    scrollLeft = 0,
    scrollTop = 0,
    columns,
    data,
  } = settings;

  useEffect(() => {
    //
  }, []);

  return (
    <LayoutRoot>
      <Nav />
      <ControlBox>
        <Settings {...settings} dispatchSettings={dispatchSettings} />
      </ControlBox>
      <Viewer>
        <Datagrid
          width={width}
          height={height}
          headerHeight={headerHeight}
          headerAlign={headerAlign}
          bodyRowHeight={bodyRowHeight}
          bodyAlign={bodyAlign}
          enableLineNumber={enableLineNumber}
          lineNumberColumnWidth={lineNumberColumnWidth}
          lineNumberStartAt={lineNumberStartAt}
          enableFrozenCell={enableFrozenCell}
          frozenColumnIndex={frozenColumnIndex}
          frozenRowIndex={frozenRowIndex}
          scrollLeft={scrollLeft}
          scrollTop={scrollTop}
          columns={columns}
          data={data}
        >
          <DatagridHeader />
          <DatagridBody />
        </Datagrid>
      </Viewer>
    </LayoutRoot>
  );
};

export default Home;
