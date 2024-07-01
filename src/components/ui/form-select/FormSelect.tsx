import classes from '../form-input/FormInput.module.scss';
import cn from 'clsx';
import {FC} from 'react';
import {InputProps} from '../../../types/types';

interface Props extends InputProps {
    placeholder: string,
    data: {
        value: string,
        text: string
    }[],
    value: string
}

const FormSelect: FC<Props> = ({side, data, placeholder, value, ...props}) => {
    return (
        <select className={cn(classes.formInput, side && classes[`form-input--${side}`])} value={value} { ...props } >
            <option value="" disabled={true}>{placeholder}</option>
            {
                data.map(option => (
                    <option value={option.value}>{ option.text }</option>
                ))
            }
        </select>
    );
};

export default FormSelect;
