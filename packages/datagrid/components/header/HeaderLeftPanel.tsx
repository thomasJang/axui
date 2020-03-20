import React, { useContext } from 'react';
import DatagridContext from '../../context/DatagridContext';
import HeaderTable from './HeaderTable';

interface IProps {}
const HeaderLeftPanel: React.FC<IProps> = ({}) => {
  const [context] = useContext(DatagridContext);
  const { _leftColGroup } = context;

  if (!_leftColGroup || _leftColGroup.length < 1) {
    return null;
  }

  return (
    <div className="axui--datagrid--header--left_panel">
      <HeaderTable columns={_leftColGroup} />
    </div>
  );
};

export default HeaderLeftPanel;
