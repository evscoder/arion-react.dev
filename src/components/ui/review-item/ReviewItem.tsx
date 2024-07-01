import {FC} from 'react';
import {Link} from 'react-router-dom';
import s from './ReviewItem.module.scss';
import cn from 'clsx';
import imagePath from '../../../helper/imagePath';
import RatingStar from '../rating-star/RatingStar';

export interface ReviewItemProps {
    id: string,
    color: string
    image?: string,
    name: string,
    caption: string,
    time: string,
    text: string,
    rating: number
}
const ReviewItem: FC<ReviewItemProps> = ({ color, image, name, caption, time, text, rating }) => {
    return (
        <div className={s.reviewItem}>
            <Link className={cn(s.reviewItem__avatar, color)} to={'/review'}>
                <div className={s.reviewItem__avatarText}>{caption}</div>
                {image && <img src={imagePath(image)} alt={name}/>}
            </Link>
            <div className={s.reviewItem__right}>
                <h5 className={s.reviewItem__name}><Link to={'/review'}>{name}</Link></h5>
                <span className={s.reviewItem__time}>{time}</span>
                <div className={s.reviewItem__rating}>
                    <RatingStar rating={rating} readOnly={true} />
                </div>
                <div className={s.reviewItem__message}>
                    <p className={s.reviewItem__text}>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
