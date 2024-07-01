import {FC, useEffect, useState} from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import styles from './ChartCircle.module.scss';
import cn from 'clsx';
import {ChartCircleProps} from '../../../../types/types';

type Props = {
    classNames: string
}

const ChartCircle: FC<ChartCircleProps & Props> = ({ classNames, ...props}) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    return (
        <CircularProgressbar
            className={cn(styles.chartCircle, classNames)}
            value={value}
            strokeWidth={5}
            styles={buildStyles({
                trailColor: 'var(--grey-light-color-4)',
                pathColor: props.color,
                pathTransitionDuration: 1
            })}
        />
    );
};

export default ChartCircle;
