import {FC} from 'react';
import s from './dashboard.module.scss';
import Card, {CardProps} from '../../container/card/card';
import TransactionItem from '../../ui/transaction-item/TransactionItem';
import {TransactionItemProps} from '../../../types/types';
import SimpleBar from 'simplebar-react';

interface WidgetHistoryProps {
    data: TransactionItemProps[]
}

type Props = CardProps & WidgetHistoryProps;

const WidgetHistory: FC<Props> = ({...props}) => {
    return (
        <Card {...props}>
            <div className={s.history}>
                <SimpleBar>
                    <div className={s.history__items}>
                        {props.data.map((item, index) => (
                            <TransactionItem {...item} key={`transaction-history-${index}`} />
                        ))}
                    </div>
                </SimpleBar>
            </div>
        </Card>
    );
};

export default WidgetHistory;
