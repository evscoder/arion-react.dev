import React, {FC} from 'react';
import s from './PageHeader.module.scss';
import cn from 'clsx';

interface Props {
    inline?: boolean,
    grid?: boolean,
    subtitle?: React.ReactElement
    title: string
}

const PageHeader: FC<Props> = ({ inline, grid, subtitle, title }) => {
    return (
        <div className={cn(s.pageHeader, inline && s['page-header--inline'], grid && s['page-header--grid'])}>
            <h1 className="page-header__title">{title}</h1>
            {subtitle}
        </div>
    );
};

export default PageHeader;
