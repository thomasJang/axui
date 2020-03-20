import React, { useContext } from 'react';
import DatagridContext from '../context/DatagridContext';
import { IDatagridHeader } from '../common/@interface';
import DatagridHeaderAsidePanel from './DatagridHeaderAsidePanel';
import DatagridHeaderLeftPanel from './DatagridHeaderLeftPanel';
import DatagridHeaderMainPanel from './DatagridHeaderMainPanel';

const DatagridHeader: React.FC<IDatagridHeader> = props => {
  const [context, setContext] = useContext(DatagridContext);
  const { headerHeight = 30 } = context;
  const styles = { ...props.style, height: headerHeight };

  return (
    <div style={styles} className="axui--datagrid--header">
      <DatagridHeaderAsidePanel />
      <DatagridHeaderLeftPanel />
      <DatagridHeaderMainPanel />
    </div>
  );
};

export default DatagridHeader;
