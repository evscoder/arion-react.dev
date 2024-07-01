import classes from './FormInput.module.scss';
import cn from 'clsx';
import {forwardRef} from 'react';
import {InputProps} from '../../../types/types';

interface Props extends InputProps {
    classNames?: string
    onClick?: () => void
}

const FormInput = forwardRef<HTMLInputElement | null, Props>(({side, select, classNames, ...props}, ref) => {
    return (
        <input
            { ...props }
            ref={ref}
            className={cn(classes.input, side && classes[`input--${side}`], select && classes['input--select'], classNames)}
            readOnly={select && true}
        />
    );
});

export default FormInput;
