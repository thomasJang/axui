import React, { useContext } from 'react';
import DatagridContext from '../context/DatagridContext';
import DatagridHeaderTable from './DatagridHeaderTable';

interface IProps {}
const DatagridHeaderMainPanel: React.FC<IProps> = ({}) => {
  const [context] = useContext(DatagridContext);
  const { _colGroup } = context;

  if (!_colGroup || _colGroup.length < 1) {
    return null;
  }
  return (
    <div className="axui--datagrid--header--main__panel">
      <DatagridHeaderTable columns={_colGroup} />
    </div>
  );
};

export default DatagridHeaderMainPanel;
