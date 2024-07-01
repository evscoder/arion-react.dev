import {FC} from 'react';
import s from './dashboard.module.scss';
import SimpleBar from 'simplebar-react';
import Card, {CardProps} from '../../container/card/card';
import Table from '../../ui/table/Table';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import useCustomPopper from '../../../hooks/useCustomPopper';
import DropdownTables from '../../ui/dropdown-tables/DropdownTables';
import {DropdownItemsProps, TableProps} from '../../../types/types';

interface WidgetTransactionsProps {
    table: TableProps['data']
    actions: DropdownItemsProps
}

type Props = CardProps & WidgetTransactionsProps;

const WidgetTransactions: FC<Props> = ({ ...props }) => {
    const {showMore} = useSelector((state: RootState) => state.itemsMoreSlice);
    const {
        setPopperElement,
        styles,
        attributes,
        onToggleMore,
        refs
    } = useCustomPopper();

    return (
        <Card {...props}>
            <div className={s.transactions}>
                <SimpleBar>
                    <Table
                        itemsMoreRef={(r: any) => refs.current.push(r)}
                        onToggleMore={onToggleMore}
                        lines={true}
                        striped={true}
                        data={props.table}
                        classNames={s.transactionTable}
                        sticky={true}
                    />
                </SimpleBar>
            </div>
            <DropdownTables
                setPopperElement={setPopperElement}
                styles={styles}
                attributes={attributes}
                showMore={showMore}
                items={props.actions.items}
            />
        </Card>
    );
};

export default WidgetTransactions;
