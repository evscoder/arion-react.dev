import {FC} from 'react';
import cn from 'clsx';
import styles from '../Header.module.scss';
import DropdownMenu from '../../../ui/dropdown-menu/DropdownMenu';
import Icon from '../../../ui/Icon';
import BadgeSignal from '../../../ui/badge-signal/BadgeSignal';
import { HeaderToolsItemProps } from '../../../../types/types';
import {Dropdown} from 'react-bootstrap';
import Tooltip from '../../../ui/tooltip/Tooltip';
import DropdownBlocks from '../../../ui/dropdown-blocks/DropdownBlocks';

const HeaderToolsItem: FC<HeaderToolsItemProps> = ({ classNames, dropdownClass, typeButton, content, icon, dropdown }) => {
    return (
        <Dropdown className={cn(styles.header__toolsItem, classNames)}>
            <Tooltip placement={'bottom'} content={content} >
                <Dropdown.Toggle className={cn(styles.header__toolsToggle, styles[`header__tools-toggle--${typeButton}`])}>
                    <Icon name={icon} />
                    <BadgeSignal classNames={styles.header__toolsBadge} />
                </Dropdown.Toggle>
            </Tooltip>
            <DropdownMenu {...dropdown} classNames={dropdownClass}>
                <DropdownBlocks {...dropdown} />
            </DropdownMenu>
        </Dropdown>
    );
};

export default HeaderToolsItem;
