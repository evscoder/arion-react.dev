import {FC, useRef, useState} from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import {DropdownItemsProps} from '../../../types/types';
import ButtonMore from '../button-more/ButtonMore';
import DropdownItems from '../dropdown-items/DropdownItems';
import s from './ItemsMore.module.scss';
interface Props extends DropdownItemsProps {}

const ItemsMore: FC<Props> = ({dropdown, ...props}) => {
    const [show, setShow] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, buttonRef, () => setShow(false), show);

    const onToggle = () => {
        setShow(!show);
    };

    const onClickItem = (): void => {
        setShow(false);
    };

    return (
        <div className={s.itemsMore}>
            <ButtonMore onToggle={onToggle} ref={buttonRef} />
            <DropdownItems {...props} show={show} ref={menuRef} onClick={onClickItem} classNames={dropdown} />
        </div>
    );
};

export default ItemsMore;
