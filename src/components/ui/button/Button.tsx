import {FC} from 'react';
import Icon from '../Icon';
import cn from 'clsx';
import styles from './Button.module.scss';
import {ButtonProps} from '../../../types/types';

const Button: FC<ButtonProps> = ({children, block, theme, load, classNames, ...props}) => {
    const buttonIcon = (side: string) => (
        <span className={cn(styles.button__icon, styles[`button__icon--${side}`])}>
            <Icon {...props.icon} />
        </span>
    );

    return (
        <button
            className={cn(
                styles.button,
                block && styles[`button--block`],
                theme && styles[`button--${theme}`],
                load && styles[`button--load`],
                classNames
            )}
            {...props}
        >
            { props.icon?.prepend && buttonIcon('left') }
            <span className={styles.button__text}>{ children }</span>
            { props.icon?.append && buttonIcon('right') }
        </button>
    );
};

export default Button;
