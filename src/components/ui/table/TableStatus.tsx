import React from 'react';
import {ColorsProps} from '../../../types/types';
import cn from 'clsx';
import s from './Table.module.scss';

interface TableStatus {
    color: ColorsProps | string,
    value: string
}

const TableStatus: React.FC<TableStatus> = ({...props}) => {
    return (
        <div className={s.tableStatus}>
            <span className={cn(s.tableStatus__icon, `color-${props.color}`)}></span> {props.value}
        </div>
    );
};

export default TableStatus;
