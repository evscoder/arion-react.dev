import React, {FC} from 'react';
import styles from './card.module.scss';
import {
    DropdownItemsProps,
    SwitcherButtonItemsProps
} from '../../../types/types';
import cn from 'clsx';
import ItemsMore from '../../ui/items-more/ItemsMore';
import {CardWeekItemProps} from './card-week/CardWeek';

export type CardProps = {
    title: string,
    cardTools?: React.ReactNode
    switchers?: React.ReactNode
    tools: {
        week: CardWeekItemProps[],
        switchers: SwitcherButtonItemsProps[]
        more: DropdownItemsProps
    },
    widgets?: React.ReactNode,

    chartChild?: React.ReactNode,
    children?: React.ReactNode,
    footer?: React.ReactNode,
    className?: string
}

const Card: FC<CardProps> = ({ className, title, cardTools, switchers, tools, widgets, chartChild, footer, children }) => {
    return (
        <div className={cn(styles.card, className)}>
            <div className={styles.card__wrapper}>
                <div className={styles.card__container}>
                    <div className={styles.card__header}>
                        <div className={styles.card__headerLeft}>
                            <h3 className={styles.card__headerTitle}>{ title }</h3>
                        </div>
                        {tools &&
                            <>
                                {(cardTools || tools.switchers) &&
                                    <div className={styles.card__tools}>
                                        {cardTools}
                                        {tools.switchers &&
                                            <div className={styles.card__toolsSwitcher}>{switchers}</div>
                                        }
                                    </div>
                                }
                                {tools.more &&
                                    <ItemsMore items={tools?.more.items} dropdown={styles.dropdownItems} />
                                }
                            </>
                        }
                    </div>
                    <div className={styles.card__body}>
                        {widgets}
                        {chartChild &&
                            <div className={styles.card__chart}>
                                {chartChild}
                            </div>
                        }
                        {children}
                    </div>
                    {footer &&
                        <div className={styles.card__footer}>
                            <div className={styles.card__container}>
                                {footer}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
