import {FC, useState} from 'react';
import SidebarLink from '../sidebar-link/SidebarLink';
import {Collapse} from 'react-bootstrap';
import styles from './SidebarMenuCollapse.module.scss';
import {SidebarLinkProps} from '../../../../types/types';

const SidebarMenuCollapse: FC<SidebarLinkProps> = (item) => {
    const [show, setShow] = useState<boolean>(false);

    const onToggleMenu = () => {
        setShow(!show);
    };

    return (
        <>
            <SidebarLink {...item} onToggleMenu={onToggleMenu} isShow={show}/>
            {item.submenu &&
                <Collapse in={show}>
                    <div>
                        <ul className={styles.sidebarMenuCollapse} data-sidebar={'sidebar-menu-collapse'}>
                            {item.submenu.map((link, index) => (
                                <li key={`${item.id}${index}`}>
                                    <SidebarLink {...link} collapse={true} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </Collapse>
            }
        </>
    );
};

export default SidebarMenuCollapse;
