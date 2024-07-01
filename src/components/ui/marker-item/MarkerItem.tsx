import {FC} from 'react';
import styles from './MarkerItem.module.scss';
import cn from 'clsx';
import {MarkerItemProps} from '../../../types/types';

interface Props {
}

const MarkerItem: FC<MarkerItemProps & Props> = ({ color, size }) => {
    return (
        <span className={cn(styles.markerItem, color, styles[`marker-item--${size}`])}></span>
    );
};

export default MarkerItem;
