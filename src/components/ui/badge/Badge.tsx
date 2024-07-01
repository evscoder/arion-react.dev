import {FC} from 'react';
import cn from 'clsx';
import {BadgeProps} from '../../../types/types';
import styles from './Badge.module.scss';

const Badge: FC<BadgeProps> = ({ type, text, size, classNames }) => {
    return (
        <span className={cn(styles.badge, type && styles[`badge--${type}`], size && styles[`badge--${size}`], classNames)}>{text}</span>
    );
};

export default Badge;
