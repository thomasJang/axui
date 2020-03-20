import React, { useContext } from 'react';
import DatagridContext from '../context/DatagridContext';

interface IProps {}
const DatagridHeaderAsidePanel: React.FC<IProps> = ({}) => {
  const [context] = useContext(DatagridContext);
  const { enableLineNumber } = context;

  if (!enableLineNumber) {
    return null;
  }
  return <div className="axui--datagrid--header--aside__panel">AsidePanel</div>;
};

export default DatagridHeaderAsidePanel;
