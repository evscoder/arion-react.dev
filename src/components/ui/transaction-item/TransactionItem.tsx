import {FC} from 'react';
import s from './TransactionItem.module.scss';
import Icon from '../Icon';
import {Link} from 'react-router-dom';
import {TransactionItemProps} from '../../../types/types';

const TransactionItem: FC<TransactionItemProps> = ({ title, time, cost }) => {
    return (
        <div className={s.transactionItem}>
            <div className={s.transactionItem__left}>
                <div className={s.transactionItem__icon}>
                    <Icon name={'icon-bill'} />
                </div>
                <div className={s.transactionItem__right}>
                    <h5 className={s.transactionItem__title}>{title}</h5>
                    <span className={s.transactionItem__time}>{time}</span>
                </div>
            </div>
            <div className={s.transactionItem__details}>
                <div className={s.transactionItem__cost}>{cost}</div>
                <Link className={'text-sm text-grey link-under'} to={'/details'}>Detail</Link>
            </div>
        </div>
    );
};

export default TransactionItem;
