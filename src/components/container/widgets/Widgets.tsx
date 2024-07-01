import styles from './Widgets.module.scss';
import cn from 'clsx';
import {FC} from 'react';
import Widget, {WidgetProps} from './widget/Widget';

interface Props {
    items: WidgetProps[]
}

const Widgets: FC<Props> = ({items}) => {
    return (
        <div className={cn(styles.widgets)}>
            {items.map(item => (
                <Widget {...item} key={item.id}/>
            ))}
        </div>
    );
};

export default Widgets;
