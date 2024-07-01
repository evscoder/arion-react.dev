import Icon from '../Icon';
import cn from 'clsx';
import s from './ButtonAdd.module.scss';
import {FC} from 'react';

interface Props {
    color?: 'blue',
    size?: 'sm',
}

const ButtonAdd: FC<Props> = ({color, size}) => {
    return (
        <button className={cn(s.buttonAdd, color && s[`button-add--${color}`], size && s[`button-add--${size}`])}>
            <span className={s.buttonAdd__icon}>
                <Icon name={'icon-plus'} />
            </span>
            <span></span>
        </button>
    );
};

export default ButtonAdd;
