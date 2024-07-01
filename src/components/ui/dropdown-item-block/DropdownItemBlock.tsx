import cn from 'clsx';
import styles from './DropdownItemBlock.module.scss';
import Icon from '../Icon';
import BadgeSignal from '../badge-signal/BadgeSignal';
import {DropdownItemProps} from '../../../types/types';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import imagePath from '../../../helper/imagePath';

const DropdownItemBlock: FC<DropdownItemProps> = ({ onRemove, ...props }) => {
    const onRemoveItem = (): void => {
        if (onRemove) {
            onRemove(props.id);
        }
    };

    return (
        <div className={cn(
            styles.dropdownItemBlock,
            props.type && styles[`dropdown-item-block--${props.type}`]
        )}>
            <button className={styles.dropdownItemBlock__remove} type={'button'} onClick={onRemoveItem}>
                <Icon name={'icon-cross'} />
            </button>
            <Link className={styles.dropdownItemBlock__link} to={props.route}>
                <div className={styles.dropdownItemBlock__left}>
                    <div className={cn(styles.dropdownItemBlock__icon, props.color)}>
                        {props.type === 'note' &&
                            <Icon name={props.icon} />
                        }
                        {props.type === 'message' &&
                            <>
                                <div className={styles.dropdownItemBlock__iconText}>{props.avatar}</div>
                                <img src={imagePath((props.thumb as string))} alt="#"/>
                            </>
                        }
                    </div>
                    {props.status && <BadgeSignal type={props.status} classNames={styles.dropdownItemBlock__signal} />}
                </div>
                <div className={styles.dropdownItemBlock__right}>
                    {props.type === 'note' &&
                        <>
                            <h4 className={styles.dropdownItemBlock__title}>{props.title}</h4>
                            <span className={styles.dropdownItemBlock__time}>{props.time}</span>
                        </>
                    }
                    {props.type === 'message' &&
                        <>
                            <div className={styles.dropdownItemBlock__column}>
                                <h4 className={styles.dropdownItemBlock__title}>{props.title}</h4>
                                <p className={styles.dropdownItemBlock__text}>{props.text}</p>
                            </div>
                            <span className={styles.dropdownItemBlock__time}>{props.time}</span>
                        </>
                    }
                </div>
            </Link>
        </div>
    );
};

export default DropdownItemBlock;
