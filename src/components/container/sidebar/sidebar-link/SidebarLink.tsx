import {FC} from 'react';
import styles from './SidebarLink.module.scss';
import Icon from '../../../ui/Icon';
import {NavLink} from 'react-router-dom';
import Badge from '../../../ui/badge/Badge';
import {SidebarLinkProps} from '../../../../types/types';

interface Props {
    collapse?: boolean,
    isShow?: boolean,
    onToggleMenu?: () => void
}

const SidebarLink: FC<Props & SidebarLinkProps> = ({ collapse, isShow, onToggleMenu, ...props}) => {
    const linkContent = () => (
        <>
            {!collapse &&
                <span className={styles.sidebarLink__icon}>
                {props.icon && <Icon name={props.icon} />}
            </span>
            }
            {collapse &&
                <span className={styles.sidebarLink__signal}></span>
            }
            <span className={styles.sidebarLink__text}>{props.text}</span>
            {props.badge &&
                <Badge classNames={styles.sidebarLink__badge} type={'red'} text={props.badge} />
            }
            {props.submenu &&
                <span className={styles.sidebarLink__arrow}>
                <Icon name={'icon-keyboard-down'} />
            </span>
            }
        </>
    );

    return (
        <>
            {props.submenu ?
                <a className={styles.sidebarLink} onClick={onToggleMenu} aria-expanded={isShow}>
                    {(() => linkContent())()}
                </a> :
                <NavLink to={props.href as string} className={styles.sidebarLink}>
                    {(() => linkContent())()}
                </NavLink>
            }
        </>
    );
};

export default SidebarLink;
