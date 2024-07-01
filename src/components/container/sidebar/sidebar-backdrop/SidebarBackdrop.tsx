import styles from './SidebarBackdropd.module.scss';
import {FC} from 'react';

interface Props {
    onClose: () => void;
}

const SidebarBackdrop: FC<Props> = ({ onClose }) => {
    return (
        <div className={styles.sidebarBackdrop} onClick={onClose}></div>
    );
};

export default SidebarBackdrop;
