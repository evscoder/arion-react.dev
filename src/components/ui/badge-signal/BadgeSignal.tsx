import {FC} from 'react';
import {BadgeSignalProps} from '../../../types/types';
import cn from 'clsx';
import styles from './BadgeSignal.module.scss';

const BadgeSignal: FC<BadgeSignalProps> = ({ type, classNames }) => {
    return (
        <span className={cn(styles.badgeSignal, styles[`badge-signal--${type}`], classNames)}></span>
    );
};

export default BadgeSignal;
