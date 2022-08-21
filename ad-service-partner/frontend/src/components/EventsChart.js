import 'hammerjs';
import {Chart, ChartSeries, ChartSeriesItem, ChartTitle} from "@progress/kendo-react-charts";
import {groupBy} from '@progress/kendo-data-query';

const EventsChart = (props) => {
    const {events} = props
    const preparedEvents = groupBy(events, [{field: "type"}]);

    const mapSeries = (item, index) => (
        <ChartSeriesItem
            data={item.items}
            name={item.value}
            field="value"
            categoryField={"date"}
            type="line"
            tooltip={{visible: true}}
            key={index}
        />
    );

    return (
        <Chart>
            <ChartTitle text="Events chart"/>
            <ChartSeries>
                {preparedEvents.map(mapSeries)}
            </ChartSeries>
        </Chart>
    );
};

export default EventsChart;