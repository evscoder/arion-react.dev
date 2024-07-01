import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import BaseLayout from '../../layout/base-layout/BaseLayout';
import Widgets from '../../container/widgets/Widgets';
import Section from '../../layout/section/Section';
import CreditWidget from '../../container/credit-widget/CreditWidget';
import CreditAdd from '../../container/credit-add/CreditAdd';
import CreditSaved from '../../container/credit-saved/CreditSaved';
import WidgetCountry from '../../layout/dashboard/WidgetCountry';
import WidgetStatistic from '../../layout/dashboard/WidgetStatistic';
import WidgetOverview from '../../layout/dashboard/WidgetOverview';
import WidgetTasks from '../../layout/dashboard/WidgetTasks';
import WidgetActivity from '../../layout/dashboard/WidgetActivity';
import WidgetProfit from '../../layout/dashboard/WidgetProfit';
import WidgetRevenue from '../../layout/dashboard/WidgetRevenue';
import WidgetHistory from '../../layout/dashboard/WidgetHistory';
import WidgetTransactions from '../../layout/dashboard/WidgetTransactions';
import WidgetSales from '../../layout/dashboard/WidgetSales';
import WidgetReviews from '../../layout/dashboard/WidgetReviews';
import {getDashboardRequest} from '../../../api/dashboard/getDashboard';
import WidgetCalendar from '../../layout/dashboard/WidgetCalendar';

const Dashboard: FC = () => {
    const { loading, data } = useSelector((state: RootState) => state.dashboardSlice);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getDashboardRequest());
    }, [dispatch]);

    return (
        <BaseLayout>
            <div>{!loading &&
                <div className={'container container--fixed'}>
                    <Widgets items={data.widgets} />
                    <div className='row'>
                        <Section classNames='col-12 col-lg-7 col-xl-8 d-flex'>
                            <WidgetRevenue {...data.revenue} />
                        </Section>
                        <Section classNames='col-12 col-lg-5 col-xl-4 d-flex'>
                            <WidgetProfit {...data.profit} />
                        </Section>
                        <Section classNames='col-12 col-lg-7 col-xl-8 d-flex'>
                            <WidgetActivity {...data.activity} />
                        </Section>
                        <Section classNames='col-12 col-lg-5 col-xl-4 d-flex'>
                            <WidgetTasks {...data.tasks} />
                        </Section>
                        <Section classNames='col-12 col-lg-7 col-xl-8 d-flex'>
                            <WidgetOverview {...data.overview} />
                        </Section>
                        <Section classNames='col-12 col-lg-5 col-xl-4 d-flex'>
                            <WidgetStatistic {...data.statistics} />
                        </Section>
                        <Section classNames='col-12 col-md-6 col-lg-6 col-xl-4 d-flex'>
                            <CreditWidget {...data.credit} />
                        </Section>
                        <Section classNames='col-12 col-md-6 col-lg-6 col-xl-4 d-flex'>
                            <CreditAdd {...data.creditAdd} />
                        </Section>
                        <Section classNames='col-12 col-md-12 col-lg-12 col-xl-4 d-flex'>
                            <CreditSaved {...data.creditSaved} />
                        </Section>
                        <Section classNames='col-12 col-lg-7 col-xl-8 d-flex'>
                            <WidgetCountry {...data.country} />
                        </Section>
                        <Section classNames='col-12 col-lg-5 col-xl-4 d-flex'>
                            <WidgetHistory {...data.history} />
                        </Section>
                        <Section classNames='col-12 d-flex'>
                            <WidgetTransactions {...data.transactions} />
                        </Section>
                        <Section classNames='col-12 col-lg-7 col-xl-8 d-flex'>
                            <WidgetSales {...data.countrySales} />
                        </Section>
                        <Section classNames='col-12 col-lg-5 col-xl-4 d-flex'>
                            <WidgetReviews {...data.reviews} />
                        </Section>
                        <Section classNames='col-12 col-lg-6 d-flex'>
                            <WidgetCalendar {...data.calendar} />
                        </Section>
                        <Section classNames='col-12 col-lg-6 d-flex'>
                            <WidgetCalendar {...data.calendar} />
                        </Section>
                    </div>
                </div>
            }</div>
        </BaseLayout>
    );
};

export default Dashboard;
