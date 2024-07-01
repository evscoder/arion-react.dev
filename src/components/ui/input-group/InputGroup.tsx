import Icon from '../Icon';
import FormInput from '../form-input/FormInput.js';
import React, {FC} from 'react';
import cn from 'clsx';
import styles from './InputGroup.module.scss';
import {IconProps, InputProps} from '../../../types/types';

export interface InputGroupProps {
    type?: 'time',
    children?: React.ReactNode,
    label?: string,
    prepend?: boolean,
    append?: React.ReactNode,
    arrow?: boolean,
    icon?: IconProps,
    symbol?: '$' | '%',
    input?: InputProps,
    classNames?: string
}

const InputGroup: FC<InputGroupProps> = ({ children, type, prepend, append, arrow, icon, symbol, input , classNames}) => {
    return (
        <div className={cn(styles.inputGroup, prepend && styles['input-group--prepend'], append && styles['input-group--append'], classNames)}>
            { prepend &&
                <div className={styles.inputGroup__prepend}>
                    {symbol ?
                        <span className={styles.inputGroup__symbol}>{ symbol }</span> :
                        <Icon {...icon} />
                    }
                </div>
            }
            { children ? children : <FormInput {...input} /> }
            { type === 'time' && <span className={styles.inputGroup__arrows}></span>}
            {append &&
                <span className={styles.inputGroup__append}>{append}</span>
            }
            {arrow &&
                <span className={styles.inputGroup__arrow}>
                    <Icon name={'icon-keyboard-down'} />
                </span>
            }
        </div>
    );
};

export default InputGroup;
