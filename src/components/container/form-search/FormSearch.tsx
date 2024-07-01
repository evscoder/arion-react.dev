import {forwardRef} from 'react';
import Icon from '../../ui/Icon';
import styles from './FormSearch.module.scss';

interface Props {
}

const FormSearch = forwardRef<HTMLInputElement, Props>(({...props}, inputElement) => {
    return (
        <form className={styles.formSearch} action="#" method="GET" {...props}>
            <div className={styles.formSearch__container}>
                <span className={styles.formSearch__iconLeft}>
                    <Icon name={'icon-search'} />
                </span>
                <input ref={inputElement} className={styles.formSearch__input} type="text" placeholder="Search..."/>
            </div>
        </form>
    );
});

export default FormSearch;
