import {FC} from 'react';
import cn from 'clsx';
import styles from './SignalBullet.module.scss';

interface Props {
    color: string,
    classNames: string
}

const SignalBullet: FC<Props> = ({classNames, color}) => {
    return (
        <span className={cn(styles.signalBullet, classNames)} style={{color: color}}></span>
    );
};

export default SignalBullet;
