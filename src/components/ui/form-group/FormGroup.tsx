import s from './FormGroup.module.scss';
import cn from 'clsx';
import React, {FC} from 'react';

interface Props {
    inline?: boolean,
    label?: boolean,
    title?: string,
    titleSize?: 'md' | 'sm'
    titleAppend?: boolean,
    size?: 'md' | 'lg',
    children: React.ReactNode
    classNames?: string
}

const FormGroup: FC<Props> = ({ children, label, inline, title, size = 'md', titleSize = 'md', titleAppend , classNames}) => {
    return (
        <div className={cn(s.formGroup, inline && s['form-group--inline'], label && s['form-group--label'], s[`form-group--${size}`], classNames)}>
            {title &&
                <label className={cn(s.formGroup__label, titleSize && s.formGroup__labelSm, titleAppend && s.formGroup__labelAppend )}>
                    {title}
                </label>
            }
            {children}
        </div>
    );
};

export default FormGroup;
