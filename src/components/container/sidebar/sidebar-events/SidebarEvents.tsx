import {FC} from 'react';
import {SidebarEventsProps} from '../../../../types/types';
import styles from './SidebarEvents.module.scss';
import cn from 'clsx';
import MarkerItem from '../../../ui/marker-item/MarkerItem';

const SidebarEvents: FC<{items: SidebarEventsProps[]}> = ({ items }) => {
    return (
        <div className={styles.sidebarEvents}>
            {items.map(({ color, text }) => (
                <div className={cn(styles.sidebarEvents__item)}>
                    <MarkerItem color={color} size={'md'} />
                    {text}
                </div>
            ))}
        </div>
    );
};

export default SidebarEvents;
