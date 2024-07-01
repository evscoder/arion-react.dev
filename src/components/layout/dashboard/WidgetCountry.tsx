import {FC} from 'react';
import SwitcherButton from '../../ui/switcher-button/SwitcherButton';
import CardWidgets from '../../container/card/card-widgets/CardWidgets';
import CountryLegend, {CountryLegendItemProps} from '../../ui/country-legend/CountryLegend';
import s from './dashboard.module.scss';
import ProgressBarStacked, {
    ProgressBarStackedItemProps
} from '../../ui/progress-bar-stacked/ProgressBarStacked';
import Card, {CardProps} from '../../container/card/card';
import {CardWidgetProps} from '../../container/card/card-widget/CardWidget';

interface WidgetCountryProps {
    widgetItems: CardWidgetProps[]
    legend: CountryLegendItemProps[]
    progressBar: ProgressBarStackedItemProps[]
}

type Props = CardProps & WidgetCountryProps;

const WidgetCountry: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props} switchers={
            <SwitcherButton items={props.tools.switchers} />
        } widgets={
            <CardWidgets data={props.widgetItems} />
        } footer={
            <CountryLegend items={props.legend} />
        }>
            <div className={s.stackedCountry}>
                <ProgressBarStacked items={props.progressBar} axis={'top'} />
            </div>
        </Card>
    );
};

export default WidgetCountry;
