import {PATHS} from '../api/api';

const imagePath = (pathName: string) => {
    const fullPath = process.env.NODE_ENV === 'production' ? `/${PATHS.root}/img/content/` : `/img/content/`;

    return fullPath + pathName;
};

export default imagePath;
