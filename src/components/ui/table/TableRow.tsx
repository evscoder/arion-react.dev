import React from 'react';
import s from './Table.module.scss';

export interface TableRowProps {
    children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({children}) => {
    return (
        <tr className={s.tableRow}>
            {children}
        </tr>
    );
};

export default TableRow;
