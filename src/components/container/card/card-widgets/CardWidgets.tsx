import styles from './CardWidgets.module.scss';
import CardWidget, {CardWidgetProps} from '../card-widget/CardWidget';
import {FC} from 'react';

interface Props {
    data: CardWidgetProps[]
}

const CardWidgets: FC<Props> = ({data}) => {
    return (
        <div className={styles.cardWidgets}>
            {data.map((item, index) => (
                <CardWidget {...item} key={item.title + index} />
            ))}
        </div>
    );
};

export default CardWidgets;
