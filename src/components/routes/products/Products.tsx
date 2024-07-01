import {FC} from 'react';
import BaseLayout from '../../layout/base-layout/BaseLayout';
import PageHeader from '../../layout/page-header/PageHeader';
import PageTools from '../../layout/page-tools/PageTools';
import Toolbox from '../../layout/toolbox/Toolbox';

const Products: FC = () => {
    return (
        <BaseLayout>
            <div className="container">
                <PageHeader title={'Products'} />
                <PageTools items={[
                    { 'href': 'index.html', 'text': 'Home' },
                    { 'href': '#', 'text': 'E-commerce', 'section': true },
                    { 'href': 'products.html', 'text': 'Products' }
                ]} />
                <Toolbox search={true} add={true}>
                    <div>item</div>
                </Toolbox>
            </div>
        </BaseLayout>
    );
};

export default Products;
