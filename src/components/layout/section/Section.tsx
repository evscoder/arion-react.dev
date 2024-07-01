import React, {FC} from 'react';
import s from './Section.module.scss';
import cn from 'clsx';

interface Props {
    classNames?: string,
    title?: string,
    children: React.ReactElement
}

const Section: FC<Props> = ({ classNames, children, title }) => {
    return (
        <section className={cn(s.section, classNames)}>
            <div className={cn(s.section__title, !title && 'd-none')}>
                <h2>{title ? title : 'Section title'}</h2>
            </div>
            { children }
        </section>
    );
};

export default Section;
