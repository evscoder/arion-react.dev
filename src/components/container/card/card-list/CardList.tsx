import {FC} from 'react';
import s from './CardList.module.scss';
import cn from 'clsx';

export interface CardListProps {
    title: string,
    value: string
}

interface Props {
    items: CardListProps[]
}

const CardList: FC<Props> = ({ items }) => {
    return (
        <ul className={s.cardList}>
            {items.map(item => (
                <li className={s.cardList__item} key={item.value}>
                    <div className={cn(s.cardList__title)}>{item.title}</div>
                    <div className={cn(s.cardList__value)}>{item.value}</div>
                </li>
            ))}
        </ul>
    );
};

export default CardList;
