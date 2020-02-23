import React, { useContext } from 'react';
import DatagridContext from '../context/DatagridContext';
import { IDatagridHeader } from '../common/@interface';

const DatagridHeader: React.FC<IDatagridHeader> = props => {
  const [context, setContext] = useContext(DatagridContext);
  const {
    columns = [],
    headerHeight = 30,
    enableLineNumber,
    _leftColGroup,
    _colGroup,
  } = context;
  const styles = { ...props.style, height: headerHeight };

  return (
    <div style={styles} className="axui--datagrid--header">
      {enableLineNumber && 'asidePanel'} //
      {_leftColGroup && _leftColGroup.length > 0 && 'leftColGroup'} //
      {_colGroup && _colGroup.length > 0 && 'colGroup'}
    </div>
  );
};

export default DatagridHeader;
