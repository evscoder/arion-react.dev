import {FC, useState} from 'react';
import cn from 'clsx';
import styles from './DropdownBlocks.module.scss';
import Badge from '../badge/Badge';
import SimpleBar from 'simplebar-react';
import {DropdownProps} from '../../../types/types';
import DropdownItemBlock from '../dropdown-item-block/DropdownItemBlock';

const DropdownBlocks: FC<DropdownProps> = ({ ...props }) => {
    const {
        badge,
        title
    } = props;
    const [items, setItems] = useState(props.items);
    const [badgeCount, setBadgeCount] = useState<number | string | undefined>(badge?.text);

    const onRemoveItem = (id: string): void => {
        setItems(items?.filter((it) => it.id !== id));

        const count = badgeCount as number;

        setBadgeCount(count - 1);
    };

    const onRemoveItems = () => {
        setItems([]);
        setBadgeCount(0);
    };

    return (
        <div className={styles.dropdownBlocks}>
            <div className={cn(styles.dropdownBlocks__top, styles.dropdownItem)}>
                <span className={styles.dropdownBlocks__title}>{title}</span>
                {badge &&
                    <Badge type={badge.type} text={badgeCount} />
                }
                {!!badgeCount &&
                    <button className={styles.dropdownBlocks__clearAll} type="button" onClick={onRemoveItems}>Clear All</button>
                }
            </div>
            <SimpleBar className={cn(styles.dropdownBlocks__items, 'scrollbar-thin scrollbar-visible')} data-element={'dropdown-blocks-content'}>
                {items?.map((item) => (
                    <div className={cn(styles.dropdownItem)} key={item.id}>
                        <DropdownItemBlock {...item} onRemove={onRemoveItem} />
                    </div>
                ))}
            </SimpleBar>
        </div>
    );
};

export default DropdownBlocks;
