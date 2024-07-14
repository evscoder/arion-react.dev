import {FC} from 'react';
import s from './dashboard.module.scss';
import Card, {CardProps} from '../../container/card/card';
import Table from '../../ui/table/Table';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import useCustomPopper from '../../../hooks/useCustomPopper';
import DropdownTables from '../../ui/dropdown-tables/DropdownTables';
import {ColorsProps, DropdownItemsProps, MediaItemProps } from '../../../types/types';
import TableWrapper from '../../ui/table/TableWrapper';
import ButtonMore from '../../ui/button-more/ButtonMore';
import MediaItem from '../../ui/media-item/MediaItem';
import TableRow from '../../ui/table/TableRow';
import TableCell from '../../ui/table/TableCell';
import TableStatus from '../../ui/table/TableStatus';
import TableHead from '../../ui/table/TableHead';

interface WidgetTransactionsProps {
    table: {
        id: string,
        head: {
            id: number,
            title: string,
        }[]
        rows: {
            id: number,
            name: MediaItemProps,
            order: string,
            date: string,
            amount: string,
            address: string,
            status: {
                color: ColorsProps | string,
                value: string
            }
        }[]
    }
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
            <TableWrapper classNames={s.transactions}>
                <Table
                    lines={true}
                    striped={true}
                    classNames={s.transactionTable}
                    sticky={true}
                    colsGroup={
                        <colgroup>
                            {props.table.head.map((_, i) => (
                                <col className={`colgroup-${i + 1}`} key={i} />
                            ))}
                        </colgroup>
                    }
                    headers={
                        <>
                            {props.table.head.map((item) => (
                                <TableHead key={item.id}>
                                    <span className={'text-nowrap'}>{item.title}</span>
                                </TableHead>
                            ))}
                            <TableHead>
                                <span className={'text-nowrap'}></span>
                            </TableHead>
                        </>
                    }
                >
                    {props.table.rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <span className={'text-grey'}>{row.order}</span>
                            </TableCell>
                            <TableCell>
                                <MediaItem {...row.name} />
                            </TableCell>
                            <TableCell>
                                <span className={'text-grey'}>{row.date}</span>
                            </TableCell>
                            <TableCell>
                                <span>{row.amount}</span>
                            </TableCell>
                            <TableCell>
                                <span className={'text-grey'}>{row.address}</span>
                            </TableCell>
                            <TableCell>
                                <TableStatus {...row.status} />
                            </TableCell>
                            <TableCell actions={true}>
                                <ButtonMore onToggle={onToggleMore} ref={(r: any) => refs.current.push(r)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            </TableWrapper>
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
