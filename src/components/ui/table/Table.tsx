import {FC} from 'react';
import s from './Table.module.scss';
import cn from 'clsx';
import {TableProps} from '../../../types/types';
import MediaItem from '../media-item/MediaItem';
import ButtonMore from '../button-more/ButtonMore';

const Table: FC<TableProps> = ({ itemsMoreRef, onToggleMore, lines, striped, groups, spaces, sticky, data, classNames }) => {
    return (
        <table className={cn('table', s.table, lines && s['table--lines'], striped && s['table--striped'], groups && s['table--groups'], spaces && s['table--spaces'], classNames)}>
            <colgroup>
                {data.head.map((_, i) => (
                    <col className={`colgroup-${i + 1}`} key={`${data.id}${i}col`}/>
                ))}
                <col/>
            </colgroup>
            <thead className={cn(s.table__header, sticky && s['table__header--sticky'])}>
                <tr>
                    {data.head.map((item, i) => (
                        <th className={cn(item.actions && s.table__actions, item.sort && s.table__thSort)} key={`${data.id}${i}th`}>
                            {!item.actions &&
                                <span className={cn(item.nowrap && 'text-nowrap')}>{item.title}</span>
                            }
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row, i) => (
                    <tr className={s.table__row} key={`${data.id}${i}row`}>
                        {row.map((td, i) => (
                            <td className={cn(s.table__td, td.actions && s.table__actions)} key={`${data.id}${i}td`}>
                                {td.status &&
                                    <div className={s.table__status}>
                                        <span className={cn(s.table__statusIcon, `color-${td.status.color}`)}></span> {td.status.value}
                                    </div>
                                }
                                {td.value &&
                                    <span className={cn(td.textGray && 'text-grey')}>{td.value}</span>
                                }
                                {td.actions &&
                                    <ButtonMore onToggle={onToggleMore} ref={itemsMoreRef} />
                                }
                                {td.media &&
                                    <MediaItem {...td.media} />
                                }
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
