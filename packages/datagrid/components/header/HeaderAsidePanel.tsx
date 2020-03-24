import React, { useContext } from 'react';
import DatagridContext from '../../context/DatagridContext';

interface IProps {
  containerHeight: number;
}
const HeaderAsidePanel: React.FC<IProps> = ({ containerHeight }) => {
  const [context] = useContext(DatagridContext);
  const { enableLineNumber, lineNumberColumnWidth } = context;

  if (!enableLineNumber) {
    return null;
  }
  return (
    <div
      className="axui--datagrid--header--aside__panel"
      style={{ width: lineNumberColumnWidth }}
    >
      &nbsp;
    </div>
  );
};

export default HeaderAsidePanel;
