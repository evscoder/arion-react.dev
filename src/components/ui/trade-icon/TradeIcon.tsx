import {FC} from 'react';
import Icon from '../Icon';
import cn from 'clsx';
import styles from './TradeIcon.module.scss';

export interface TradeIconProps {
    direction: 'up' | 'down',
    icon: string
}

const TradeIcon: FC<TradeIconProps> = ({ direction, icon }) => {
    return (
        <span className={cn(styles.tradeIcon, styles[`trade-icon--${direction}`])}>
            <Icon name={icon} />
        </span>
    );
};

export default TradeIcon;
