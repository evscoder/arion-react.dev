import {FC} from 'react';
import s from './Pagination.module.scss';
import Icon from '../Icon';
import cn from 'clsx';

interface Props {

}
const Pagination: FC<Props> = () => {
    return (
        <ol className={s.pagination}>
            <li className={s.pagination__item}>
                <a className={cn(s.pagination__arrow, s['pagination__arrow--prev'])} href="#">
                    <Icon name={'icon-keyboard-left'} />
                </a>
            </li>
            <li className={s.pagination__item}>
                <a className={s.pagination__link} href="#">1</a>
            </li>
            <li className={s.pagination__item}>
                <a className={s.pagination__link} href="#">2</a>
            </li>
            <li className={s.pagination__item}>
                <a className={s.pagination__link} href="#">3</a>
            </li>
            <li className={cn(s.pagination__item, s.pagination__itemDots)}>...</li>
            <li className={s.pagination__item}>
                <a className={s.pagination__link} href="#">10</a>
            </li>
            <li className={s.pagination__item}>
                <a className={cn(s.pagination__arrow, s['pagination__arrow--next'])} href="#">
                    <Icon name={'icon-keyboard-right'} />
                </a>
            </li>
        </ol>
    );
};

export default Pagination;
