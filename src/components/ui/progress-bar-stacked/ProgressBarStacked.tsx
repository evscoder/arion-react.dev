import {FC} from 'react';
import s from './ProgressBarStacked.module.scss';
import cn from 'clsx';


export interface ProgressBarStackedItemProps {
    color: string,
    width: string,
    value: string
}

export interface Props {
    axis: string,
    items: ProgressBarStackedItemProps[]
}

const ProgressBarStacked: FC<Props> = ({ items, axis}) => {
    return (
        <div className={cn(s.progressbarStacked, s[`progressbar-stacked--axis-${axis}`])}>
            <div className={s.progressbarStacked__items}>
                {items.map((item, index) => (
                    <div className={cn(s.progressbarStacked__bar, s[`progressbar-stacked__bar--${item.color}`])} style={{width: item.width}} key={`progressbarStacked-${index}`}>
                        <span className={s.progressbarStacked__barCount}>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressBarStacked;
