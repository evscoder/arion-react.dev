import React, {FC} from 'react';
import styles from './SidebarSection.module.scss';

interface Props {
    title?: string,
    children: React.ReactElement
}

const SidebarSection: FC<Props> = ({ title, children }) => {
    return (
        <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarSection__title}>{title}</h3>
            { children }
        </div>
    );
};

export default SidebarSection;
