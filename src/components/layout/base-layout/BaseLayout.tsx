import React, {FC, useEffect} from 'react';
import DemoPanel from '../../container/demo-panel/DemoPanel';
import Sidebar from '../../container/sidebar/Sidebar';
import Header from '../../container/header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import {getDataRequest} from '../../../api/data/getData';
interface Props {
    children: React.ReactElement
}

const BaseLayout: FC<Props> = ({ children }) => {
    const { loading, data } = useSelector((state: RootState) => state.dataSlice);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getDataRequest());
    }, [dispatch]);

    return (!loading &&
        <>
            <DemoPanel />
            <Header {...data.header} />
            <Sidebar {...data.sidebar} />
            <main className={'page-content'}>
                {children}
            </main>
        </>
    );
};

export default BaseLayout;
