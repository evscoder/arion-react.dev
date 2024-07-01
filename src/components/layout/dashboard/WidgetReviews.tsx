import {FC} from 'react';
import ReviewList from '../../container/review-list/ReviewList';
import {ReviewItemProps} from '../../ui/review-item/ReviewItem';
import Card, {CardProps} from '../../container/card/card';
import SimpleBar from 'simplebar-react';
import s from './dashboard.module.scss';

interface WidgetReviewsProps {
    items: ReviewItemProps[]
}

type Props = CardProps & WidgetReviewsProps;

const WidgetReviews: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props}>
            <div className={s.reviews}>
                <SimpleBar>
                    <ReviewList data={props.items} classNames={s.reviews__list} />
                </SimpleBar>
            </div>
        </Card>
    );
};

export default WidgetReviews;
