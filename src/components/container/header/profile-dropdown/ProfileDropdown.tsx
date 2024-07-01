import styles from './ProfileDropdown.module.scss';
import DropdownMenu from '../../../ui/dropdown-menu/DropdownMenu';
import Icon from '../../../ui/Icon';
import {ProfileDropdownProps} from '../../../../types/types';
import {FC} from 'react';
import cn from 'clsx';
import {Link} from 'react-router-dom';

const ProfileDropdown: FC<ProfileDropdownProps> = ({ items }) => {
    return (
        <DropdownMenu classNames={styles.profileDropdown} direction={'right'}>
            {items.map(({ route, icon, text }, index) => (
                <Link
                    className={cn(styles.profileDropdown__item, styles.dropdownItem)}
                    to={route}
                    tabIndex={0}
                    key={`profileDropdownItem_${index}`}
                >
                        <span className={styles.profileDropdown__icon}>
                            <Icon name={icon} />
                        </span>
                    <span>{text}</span>
                </Link>
            ))}
        </DropdownMenu>
    );
};

export default ProfileDropdown;
