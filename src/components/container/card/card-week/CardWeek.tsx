import React, {FC, useRef, useState} from 'react';
import cn from 'clsx';
import styles from './CardWeek.module.scss';
import useClickOutside from '../../../../hooks/useClickOutside';
import InputGroup from '../../../ui/input-group/InputGroup';
import FormInput from '../../../ui/form-input/FormInput';
import DropdownMenu from '../../../ui/dropdown-menu/DropdownMenu';

export interface CardWeekItemProps {
    text: string
}

export interface CardWeekProps {
    classNames?: string
    items: CardWeekItemProps[]
}

const CardWeek: FC<CardWeekProps> = ({items, classNames}) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [select, setSelect] = useState<{index: number, value: string}>({index: 0, value: ''});
    const menuRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const onShow = (): void => {
        setToggle(true);
    };

    useClickOutside(menuRef, inputRef, () => {
        setToggle(false);
    }, toggle);

    const onSelectChange = (event: React.MouseEvent): void => {
        const { target }: any = event;

        if (target.classList.contains(styles.dropdownItem)) {
            const menuItems = menuRef.current as HTMLDivElement;
            const index = [...menuItems.children].findIndex(item => item === target);
            const element = menuItems.children[index];

            setSelect({
                index,
                value: element.innerHTML
            });
        }

        setToggle(false);
    };

    const onChange = (event: any) => {
        event.target.value = select.value;
    };

    return (
        <div className={cn(styles.cardWeek, classNames)}>
            <InputGroup classNames={styles.cardWeek__inputGroup} arrow={true}>
                <FormInput ref={inputRef} select={true} onClick={onShow} value={!select.value ? items[0].text : select.value} onChange={onChange}  />
                <DropdownMenu ref={menuRef} show={toggle} onClick={onSelectChange}>
                    {items.map((item, index) => (
                        <button className={cn(styles.dropdownItem, select.index === index && styles.active)} type={'button'} tabIndex={0} key={item.text}>
                            {item.text}
                        </button>
                    ))}
                </DropdownMenu>
            </InputGroup>
        </div>
    );
};

export default CardWeek;
