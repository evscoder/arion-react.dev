import {FC} from 'react';
import {MediaItemProps} from '../../../types/types';
import s from './MediaItem.module.scss';
import cn from 'clsx';
import imagePath from '../../../helper/imagePath';

const MediaItem: FC<MediaItemProps> = ({ size, file, color, avatarTitle, avatar, title }) => {
    return (
        <div className={cn(s.mediaItem, size && s[`media-item--${size}`], file && s['media-item--file'])}>
            <div className={cn(s.mediaItem__icon, `color-${color}`)}>
                <div className={s.mediaItem__iconText}>{avatarTitle}</div>
                {avatar && <img className={s.mediaItem__thumb} src={imagePath(avatar)} alt={avatarTitle}/>}
            </div>
            <div className={s.mediaItem__right}>
                <h5 className={s.mediaItem__title}>{title}</h5>
            </div>
        </div>
    );
};

export default MediaItem;
