import styles from './DropdownItems.module.scss';
import Icon from '../Icon';
import {forwardRef} from 'react';
import {DropdownItemsProps} from '../../../types/types';
import cn from 'clsx';

const DropdownItems = forwardRef<HTMLDivElement, DropdownItemsProps>(({show, onClick, ...props}, ref) => {
    const {
        direction,
        fluid,
        classNames,
        items
    } = props;

    return (
        <div ref={ref} className={
            cn(
                styles.dropdownItems,
                direction && styles[`dropdown-items--${direction}`],
                fluid && styles.dropdownItemsFluid,
                classNames,
                show && styles.show
            )
        }>
            <div className={styles.dropdownItems__container} data-dropdown-items={'container'}>
                <ul className={styles.dropdownItems__list}>
                    {items?.map(item => (
                        <li className={styles.dropdownItems__item} key={item.id}>
                            <button className={styles.dropdownItems__link} onClick={onClick}>
                                <span className={styles.dropdownItems__linkIcon}>
                                    <Icon name={item.icon} />
                                </span>
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default DropdownItems;
