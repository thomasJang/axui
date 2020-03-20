import React, { useContext } from 'react';
import DatagridContext from '../../context/DatagridContext';
import { IColumn } from '../../common/@interface';

interface IProps {
  columns: IColumn[];
}
const HeaderTable: React.FC<IProps> = ({ columns }) => {
  return (
    <table>
      <colgroup>
        {columns.map((col, ci) => (
          <col key={ci} style={{ width: col._width }} />
        ))}
      </colgroup>
      <tr>
        {columns.map((col, ci) => (
          <td key={ci}>{col.label}</td>
        ))}
      </tr>
    </table>
  );
};

export default HeaderTable;
