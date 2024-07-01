import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Icons from '../../Icons';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';

interface Props {
    children?: React.ReactElement
}

const Navigation: FC<Props> = ({ children }) => {
    return (
        <>
            <Icons />
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path={'/products'} element={<Products />} />
            </Routes>
            { children }
        </>
    );
};

export default Navigation;
