import {FC} from 'react';
import styles from './SidebarMenu.module.scss';
import SidebarLink from '../sidebar-link/SidebarLink';
import {SidebarLinkProps} from '../../../../types/types';
import SidebarMenuCollapse from '../sidebar-menu-collapse/SidebarMenuCollapse';

const SidebarMenu: FC<{items: SidebarLinkProps[]}> = ({ items }) => {
    return (
        <ul className={styles.sidebarMenu}>
            {items.map((item) => (
                <li className={styles.sidebarMenu__item} key={item.id}>
                    {!item.submenu ?
                        <SidebarLink {...item}/> :
                        <SidebarMenuCollapse {...item} />
                    }
                </li>
            ))}
        </ul>
    );
};

export default SidebarMenu;
