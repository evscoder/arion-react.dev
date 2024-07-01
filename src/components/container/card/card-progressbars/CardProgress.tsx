import {FC} from 'react';
import styles from './CardProgress.module.scss';
import {ProgressBarProps} from '../../../../types/types';
import ProgressBar from '../../../ui/progress-bar/ProgressBar';

interface Props {
    progressBars: ProgressBarProps[]
}

const CardProgress: FC<Props> = ({ progressBars }) => {
    return (
        <div className={styles.cardProgress}>
            {progressBars.map((item, index) => {
                return (
                    <div className={styles.cardProgress__item} key={item.title + index}>
                        <ProgressBar {...item} />
                    </div>
                );
            })}
        </div>
    );
};

export default CardProgress;
