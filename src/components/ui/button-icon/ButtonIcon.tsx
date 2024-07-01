import Icon from '../Icon';
import {FC} from 'react';
import s from './ButtonIcon.module.scss';
import cn from 'clsx';

interface Props {
    icon: string,
    small?: boolean,
    transparent?: boolean,
    color?: 'grey'
}

const ButtonIcon: FC<Props> = ({ icon, small, transparent, color }) => {
    return (
        <button className={cn(s.buttonIcon, small && s['button-icon--small'], transparent && s['button-icon--transparent'], color && s[`button-icon--${color}`])} type={'button'}>
            <span className={s.buttonIcon__icon}>
                <Icon name={icon} />
            </span>
        </button>
    );
};

export default ButtonIcon;
