import React, { useState, useEffect } from 'react';
import { IDatagridProps, IDatagridContext } from '../common/@interface';
import DataContext from '../context/DatagridContext';
import getCTXDataByColumns from '../common/getCTXDataByColumns';

const Datagrid: React.FC<IDatagridProps> = props => {
  const [ctx, setCtx] = useState<IDatagridContext>({});
  const { cssClassName = 'axui--datagrid' } = ctx;
  const styles: React.CSSProperties = {
    ...props.style,
    width: props.width,
    height: props.height,
  };

  // componnent didUpdate
  useEffect(() => {
    // make new context
    const nextCtx: IDatagridContext = {
      ...props,
      _scrollLeft: 0,
      _scrollTop: 0,
    };

    if (
      ctx.columns !== nextCtx.columns ||
      ctx.enableFrozenCell !== nextCtx.enableFrozenCell ||
      ctx.frozenColumnIndex !== nextCtx.frozenColumnIndex
    ) {
      console.log('getCTXData by columns');
      const {
        _leftColGroup,
        _colGroup,
        _calcColumnsWidth,
      } = getCTXDataByColumns(nextCtx.columns, {
        containerWidth: nextCtx.width || 0,
        enableFrozenCell: nextCtx.enableFrozenCell,
        frozenColumnIndex: nextCtx.frozenColumnIndex,
      });
      nextCtx._leftColGroup = _leftColGroup;
      nextCtx._colGroup = _colGroup;
      nextCtx._calcColumnsWidth = _calcColumnsWidth;
    }
    if (ctx.data !== nextCtx.data) {
      console.log('changed or init data');
    }

    setCtx(nextCtx);
  }, Object.keys(props).map(k => props[k]));

  return (
    <DataContext.Provider value={[ctx, setCtx]}>
      <div className={cssClassName} style={styles}>
        {props.children}
      </div>
    </DataContext.Provider>
  );
};

export default Datagrid;
