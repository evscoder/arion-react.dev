import { Rating } from '@smastrom/react-rating';
import {FC, useState} from 'react';
import s from './RatingStar.module.scss';

interface RatingStarProps {
    rating: number
    readOnly: boolean
}

const RatingStar: FC<RatingStarProps> = ({ rating, readOnly }) => {
    const [value, setValue] = useState<number>(rating);
    return (
        <Rating
            className={s.ratingStar}
            value={value}
            onChange={setValue}
            readOnly={readOnly}
            itemStyles={{
                itemShapes: <path d="M11.7725 3.48035L13.5771 7.13694C13.7026 7.39126 13.9452 7.56748 14.2259 7.6082L18.2613 8.1946C18.9682 8.2974 19.2502 9.16582 18.7389 9.66411L15.8189 12.5103C15.616 12.7083 15.5232 12.9936 15.5712 13.273L16.2604 17.292C16.3813 17.9959 15.6423 18.5326 15.0102 18.2005L11.401 16.3031C11.15 16.1713 10.85 16.1713 10.599 16.3031L6.9898 18.2005C6.35768 18.5329 5.61875 17.9959 5.73957 17.292L6.42877 13.273C6.47683 12.9936 6.38404 12.7083 6.18112 12.5103L3.26112 9.66411C2.74982 9.16549 3.03184 8.29706 3.73872 8.1946L7.77412 7.6082C8.05481 7.56748 8.29744 7.39126 8.42293 7.13694L10.2275 3.48035C10.5433 2.83988 11.4564 2.83988 11.7725 3.48035Z" />,
                itemStrokeWidth: 0,
                activeFillColor: '#fdbf5e',
                inactiveFillColor: '#b3c0ce'
            }}
        />
    );
};

export default RatingStar;
