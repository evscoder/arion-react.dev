import React, {FC} from 'react';
import s from './TableWrapper.module.scss';
import Pagination from '../pagination/Pagination';
import SimpleBar from 'simplebar-react';
import cn from 'clsx';

interface Props {
    collapse?: boolean,
    children: React.ReactNode,
    bottom?: boolean,
    classNames?: string
}

const TableWrapper: FC<Props> = ({ children, collapse, bottom, classNames  }) => {
    return (
        <div className={cn(s.tableWrapper, classNames)}>
            <SimpleBar className={cn(s.tableWrapper__content, collapse && s.tableCollapse, 'scrollbar-thin scrollbar-visible')}>
                {children}
            </SimpleBar>
            {bottom && <div className={s.tableWrapper__footer}>
                <div className={'row'}>
                    <div className={cn(s.tableWrapper__showResult, 'col text-grey')}>
                        <span className="d-none d-sm-inline-block">Showing</span> 1 to 10 <span className="d-none d-sm-inline-block">of 50 items</span>
                    </div>
                    <div className={cn(s.tableWrapper__pagination, 'col-auto')}>
                        <Pagination />
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default TableWrapper;
