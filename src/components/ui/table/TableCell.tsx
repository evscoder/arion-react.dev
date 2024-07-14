import React from 'react';
import cn from 'clsx';
import s from './Table.module.scss';

export interface TableCellProps {
    children: React.ReactNode;
    actions?: boolean;
}

const TableCell: React.FC<TableCellProps> = ({children, actions}) => {
    return (
        <td className={cn(s.tableCell, actions && s['table-cell--actions'])}>
            {children}
        </td>
    );
};

export default TableCell;
