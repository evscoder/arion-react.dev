import {FC, useEffect, useRef, useState} from 'react';
import Icon from '../../ui/Icon';
import {HeaderProps} from '../../../types/types';
import styles from './Header.module.scss';
import ToggleSidebar from '../../ui/toggle-sidebar/ToggleSidebar';
import ToggleSearch from '../../ui/toggle-search/ToggleSearch';
import cn from 'clsx';
import FormSearch from '../form-search/FormSearch';
import HeaderToolsItem from './header-tools-item/HeaderToolsItem';
import {Dropdown} from 'react-bootstrap';
import Tooltip from '../../ui/tooltip/Tooltip';
import ProfileDropdown from './profile-dropdown/ProfileDropdown';
import LangMenu from './lang-menu/LangMenu';
import {useDispatch, useSelector} from 'react-redux';
import {toggle} from '../../../redux/menuSlice';
import {RootState} from '../../../store';
import imagePath from '../../../helper/imagePath';

const Header: FC<HeaderProps> = ({ ...props }) => {
    const [searchShow, setSearchShow] = useState<boolean>(false);
    const { isShowMenu } = useSelector((state: RootState) => state.menuSlice);
    const dispatch = useDispatch();
    const searchInput = useRef<HTMLInputElement>(null);

    const onToggleMenu = () => {
        dispatch(toggle());
    };

    const onToggleSearch = (): void => {
        setSearchShow(!searchShow);
    };

    useEffect(() => {
        const input = searchInput.current as HTMLInputElement;

        searchShow ? input.focus() : input.blur();
    }, [searchShow]);

    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div className="container-fluid">
                    <div className={cn(styles.header__row, 'row justify-content-between')}>
                        <div className={cn(styles.header__colLeft, 'col d-flex align-items-center')}>
                            <div className={styles.header__leftToggle}>
                                <ToggleSidebar classNames={cn(styles.header__toggleMenu, isShowMenu && styles['active'])} onToggle={onToggleMenu} />
                                <ToggleSearch classNames={styles.header__toggleSearch} isActive={searchShow} onToggle={onToggleSearch} />
                            </div>
                            <div className={cn(styles.header__search, searchShow && styles.show)}>
                                <FormSearch ref={searchInput} />
                            </div>
                        </div>
                        <div className={cn(styles.header__colRight, 'col d-flex align-items-center')}>
                            <Dropdown className={cn(styles.header__language)}>
                                <Tooltip placement={'bottom'} content={'Language'} >
                                    <Dropdown.Toggle className={styles.header__toggleLanguage}>
                                        <Icon name={'icon-language'} />
                                        <span className="icon-arrow-down">
                                            <Icon name={'icon-arrow-down'} />
                                        </span>
                                    </Dropdown.Toggle>
                                </Tooltip>
                                <LangMenu items={props.lang.items} />
                            </Dropdown>
                            <div className={styles.header__tools}>
                                <HeaderToolsItem
                                    typeButton={'message'}
                                    content={'Notifications'}
                                    icon={'icon-message'}
                                    classNames={styles.header__notes}
                                    dropdown={props.notifications}
                                    dropdownClass={styles.header__notesDropdown}
                                />
                                <HeaderToolsItem
                                    typeButton={'bell'}
                                    content={'Messages'}
                                    icon={'icon-bell'}
                                    classNames={styles.header__messages}
                                    dropdown={props.messages}
                                    dropdownClass={styles.header__messagesDropdown}
                                />
                            </div>
                            <Dropdown className={cn(styles.header__profile)}>
                                <Dropdown.Toggle className={cn(styles.header__profileToggle, styles['dropdown__toggle'])}>
                                    <div className={styles.header__profileImage}>
                                        <span className={styles.header__profileImageText}>{props.profile.abbr}</span>
                                        <img src={imagePath(props.profile.icon)} alt="#"/>
                                    </div>
                                    <div className={styles.header__profileText}><span>{props.profile.name}</span></div>
                                    <span className="icon-arrow-down">
                                        <Icon name={'icon-arrow-down'} />
                                    </span>
                                </Dropdown.Toggle>
                                <ProfileDropdown items={props.profile.dropdown.items} />
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
