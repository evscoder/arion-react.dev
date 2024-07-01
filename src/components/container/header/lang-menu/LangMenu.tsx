import {FC} from 'react';
import styles from './LangMenu.module.scss';
import stylesDropdown from '../../../ui/dropdown-menu/DropdownMenu.module.scss';
import cn from 'clsx';
import DropdownMenu from '../../../ui/dropdown-menu/DropdownMenu';
import {LangMenuProps} from '../../../../types/types';
import imagePath from '../../../../helper/imagePath';

const LangMenu: FC<LangMenuProps> = ({ items }) => {
    return (
        <DropdownMenu classNames={styles.langMenu}>
            {items.map(({ icon, text }, index) => (
                <button className={cn(styles.langMenu__button, stylesDropdown.dropdownItem)} tabIndex={0} key={`dropdownLangItem_${index}`}>
                    <img className={styles.langMenu__icon} src={imagePath(icon)} alt="#" />
                    <span className={styles.langMenu__text}>{text}</span>
                </button>
            ))}
            <div className={styles.langMenu__separate}></div>
            <a className={cn(styles.langMenu__button, styles.langMenu__buttonAll, stylesDropdown.dropdownItem)} href="#" tabIndex={0}>Learn</a>
        </DropdownMenu>
    );
};

export default LangMenu;
