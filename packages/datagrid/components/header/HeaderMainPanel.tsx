import React, { useContext } from 'react';
import DatagridContext from '../../context/DatagridContext';
import HeaderTable from './HeaderTable';

interface IProps {}
const HeaderMainPanel: React.FC<IProps> = ({}) => {
  const [context] = useContext(DatagridContext);
  const { _colGroup } = context;

  if (!_colGroup || _colGroup.length < 1) {
    return null;
  }
  return (
    <div className="axui--datagrid--header--main__panel">
      <HeaderTable columns={_colGroup} />
    </div>
  );
};

export default HeaderMainPanel;
