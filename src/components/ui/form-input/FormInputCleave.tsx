import {FC} from 'react';
import Cleave from 'cleave.js/react';
import cn from 'clsx';
import classes from './FormInput.module.scss';
import {InputProps} from '../../../types/types';

interface Props extends InputProps {
    classNames?: string
    onClick?: () => void,
    options: any
}

const FormInputCleave: FC<Props> = ({side, classNames, options, ...props}) => {
    return (
        <Cleave
            { ...props }
            htmlRef={ref => ref}
            className={cn(classes.input, side && classes[`input--${side}`], classNames)}
            options={options}
        />
    );
};

export default FormInputCleave;
