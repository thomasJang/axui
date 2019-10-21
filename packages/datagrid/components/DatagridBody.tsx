import React, { useContext } from 'react';
import DatagridContext from '../context/DatagridContext';

const DatagridBody: React.FC = props => {
  const [context, setContext] = useContext(DatagridContext);
  const { data = [], columns = [] } = context;
  return (
    <div role="datagrid-body">
      {columns.map((column, key) => {
        return (
          <div key={key}>
            {column.key} / {column.label}
          </div>
        );
      })}
    </div>
  );
};

export default DatagridBody;
