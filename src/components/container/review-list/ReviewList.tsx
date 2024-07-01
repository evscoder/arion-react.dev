import {FC} from 'react';
import ReviewItem, {ReviewItemProps} from '../../ui/review-item/ReviewItem';
import s from './ReviewList.module.scss';
import cn from 'clsx';

interface Props {
    classNames: string
    data: ReviewItemProps[]
}
const ReviewList: FC<Props> = ({ data, classNames }) => {
    return (
        <div className={cn(s.reviewList, classNames)}>
            {data.map(item => (
                <ReviewItem {...item} key={item.id} />
            ))}
        </div>
    );
};

export default ReviewList;
