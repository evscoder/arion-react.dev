import {FC} from 'react';
import style from './ProgressBar.module.scss';
import {ProgressBarProps} from '../../../types/types';
import cn from 'clsx';

const ProgressBar: FC<ProgressBarProps> = ({...props}) => {
    return (
        <div className={cn(style.progressbar)}>
            <div className={style.progressbar__legend}>
                <span className={style.progressbar__legendMarker} style={{color: `${props.color}`}}></span>
                <span>{props.title}</span>
            </div>
            <div className={style.progressbar__items}>
                <div className={style.progressbar__bar} style={{width: `${props.width}`, backgroundColor: props.color }}></div>
            </div>
            <div className={style.progressbar__append}><span className={style.progressbar__percentage}>{props.value}</span></div>
        </div>
    );
};

export default ProgressBar;
