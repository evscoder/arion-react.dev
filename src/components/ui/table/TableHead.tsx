import React from 'react';
import s from '../../layout/dashboard/dashboard.module.scss';
import cn from 'clsx';

interface TableHeadProps {
    children: React.ReactNode,
    actions?: boolean,
    sort?: boolean
}
const TableHead: React.FC<TableHeadProps> = ({ children, sort}) => {
    return (
        <th className={cn(s.tableTd, sort && s['table-td--sort'])}>
            {children}
        </th>
    );
};

export default TableHead;
