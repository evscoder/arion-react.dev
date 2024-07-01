import {forwardRef} from 'react';
import Icon from '../Icon';
import cn from 'clsx';
import styles from './DropdownMenu.module.scss';
import {DropdownProps} from '../../../types/types';
import {Dropdown} from 'react-bootstrap';

const DropdownMenu = forwardRef<HTMLDivElement, DropdownProps>(({ children, ...props}, ref) => {
    return (
        <Dropdown.Menu ref={ref} className={cn(styles.dropdownMenu, styles[`dropdown-menu--${props.direction}`], props.classNames)} show={props.show} onClick={props.onClick}>
            {children}
            {props.bottom &&
                <>
                    <div className={styles.dropdownMenu__divider}></div>
                    <a className={cn(styles.dropdownItem, styles.dropdownMenu__linkAll)} href="#">
                        {props.bottom.text}
                        <Icon name={'icon-keyboard-right'} />
                    </a>
                </>
            }
        </Dropdown.Menu>
    );
});

export default DropdownMenu;
