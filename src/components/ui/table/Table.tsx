import React from 'react';
import s from './Table.module.scss';
import cn from 'clsx';

export type TableProps = {
    lines?: boolean,
    striped?: boolean,
    groups?: boolean,
    spaces?: boolean,
    sticky?: boolean,
    classNames?: string,
    headers: React.ReactNode,
    children: React.ReactNode,
    colsGroup: React.ReactNode
}

const Table: React.FC<TableProps> = ({ colsGroup, headers, children, lines, striped, groups, spaces, sticky, classNames }) => {
    return (
        <table className={cn('table', s.table, lines && s['table--lines'], striped && s['table--striped'], groups && s['table--groups'], spaces && s['table--spaces'], classNames)}>
            {colsGroup}
            <thead className={cn(s.table__header, sticky && s['table__header--sticky'])}>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
};

export default Table;
