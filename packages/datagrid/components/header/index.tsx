import React, { useContext } from 'react';
import DatagridContext from '../../context/DatagridContext';
import { IDatagridHeader } from '../../common/@interface';
import HeaderAsidePanel from './HeaderAsidePanel';
import HeaderLeftPanel from './HeaderLeftPanel';
import HeaderMainPanel from './HeaderMainPanel';

const DatagridHeader: React.FC<IDatagridHeader> = props => {
  const [context, setContext] = useContext(DatagridContext);
  const { headerHeight = 30 } = context;
  const styles = { ...props.style, height: headerHeight };

  return (
    <div style={styles} className="axui--datagrid--header">
      <HeaderAsidePanel />
      <HeaderLeftPanel />
      <HeaderMainPanel />
    </div>
  );
};

export default DatagridHeader;
