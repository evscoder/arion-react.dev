import {FC} from 'react';
import styles from './CardWidget.module.scss';
import cn from 'clsx';
import {BadgeProps} from '../../../../types/types';
import TradeIcon, {TradeIconProps} from '../../../ui/trade-icon/TradeIcon';
import Badge from '../../../ui/badge/Badge';

export interface CardWidgetProps {
    classNames?: string,
    size?: 'sm' | 'xl'
    type?: 'grey' | 'red'
    title: string,
    balance: string,
    badge?: BadgeProps,
    trade?: TradeIconProps
}

const CardWidget: FC<CardWidgetProps> = ({...props }) => {
    const {
        size,
        title,
        type,
        balance,
        trade,
        badge
    } = props;

    return (
        <div className={cn(styles.cardWidget, styles[`card-widget--${size}`])}>
            <h4 className={styles.cardWidget__title}>{title}</h4>
            <div className={styles.cardWidget__trade}>
                <span className={cn(styles.cardWidget__count, type && `text-${type}`)}>{balance}</span>
                {trade && <TradeIcon direction={trade.direction} icon={trade.icon} />}
                {badge && <Badge text={badge.text} type={badge.type} size={'sm'} />}
            </div>
        </div>
    );
};

export default CardWidget;
