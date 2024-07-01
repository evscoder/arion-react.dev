import {FC} from 'react';
import s from './DropdownTables.module.scss';
import DropdownItems from '../dropdown-items/DropdownItems';
import {DropdownItemsProps} from '../../../types/types';

interface Props extends DropdownItemsProps {
    setPopperElement: any,
    styles: any,
    attributes: any,
    showMore: boolean
}

const DropdownTables: FC<Props> = ({ setPopperElement, styles, attributes, items, showMore}) => {
    return (
        <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className={s.popperDropdown}>
            <DropdownItems  items={items} show={showMore} direction={'right'} classNames={s.dropdownItemsTable}  />
        </div>
    );
};

export default DropdownTables;
