import {FC} from 'react';
import {Link} from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import styles from './Sidebar.module.scss';
import SidebarBackdrop from './sidebar-backdrop/SidebarBackdrop';
import SidebarMenu from './sidebar-menu/SidebarMenu';
import {SidebarProps} from '../../../types/types';
import SidebarEvents from './sidebar-events/SidebarEvents';
import SidebarSection from './sidebar-section/SidebarSection';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'clsx';
import {closeMenu, closeMobileMenu} from '../../../redux/menuSlice';
import imagePath from '../../../helper/imagePath';
import {RootState} from '../../../store';

const Sidebar: FC<SidebarProps> = ({ events, ...props }) => {
    const { isShowMenu, isShowMobileMenu } = useSelector((state: RootState) => state.menuSlice);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(closeMenu(true));

        setTimeout(() => {
            dispatch(closeMobileMenu());
        }, 300);
    };

    const onClickBackdrop = () => {
        dispatch(closeMenu(false));
    };

    return (
        <>
            <SidebarBackdrop onClose={onClickBackdrop} />
            <aside className={cn(styles.sidebar, (isShowMenu || isShowMobileMenu) && styles['sidebar--show'], isShowMenu && styles['sidebar--translate'])} data-sidebar={'sidebar'}>
                <div className={styles.sidebar__backdrop} onClick={onClose}></div>
                <div className={styles.sidebar__container}>
                    <div className={styles.sidebar__top}>
                        <div className="container container--sm">
                            <Link className={styles.sidebar__logo} to={props.logoLink}>
                                <img className={styles.sidebar__logoIcon} src={imagePath(props.logoIcon)} alt="#"/>
                                <div className={styles.sidebar__logoText}>{ props.logoName }</div>
                            </Link>
                        </div>
                    </div>
                    <SimpleBar className={styles.sidebar__content}>
                        <nav className={styles.sidebar__nav}>
                            <SidebarMenu items={props.menu} />
                        </nav>
                        {events &&
                            <SidebarSection title={events.title}>
                                <SidebarEvents items={events.items} />
                            </SidebarSection>
                        }
                    </SimpleBar>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
