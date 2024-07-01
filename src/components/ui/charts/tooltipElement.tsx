const tooltipChartArea = () => ({
    custom: ({ series, dataPointIndex, w }: any) => {
        let elementRows = '';

        series.forEach((el: any) => {
            elementRows += `
                <span class="chart-tooltip-custom__value">${el[dataPointIndex]}</span>
                <span class="chart-tooltip-custom__separate-item"></span>
            `;
        });

        return `
            <div class="chart-tooltip-custom">
                <div class="chart-tooltip-custom__items">${elementRows}</div>
                <div class="chart-tooltip-custom__title">Jan ${w.globals.labels[dataPointIndex]}</div>
            </div>
        `;
    }
});

const tooltipChart = (formatter?: any) => ({
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter(params: any) {
        const element = document.createElement('div');
        let elementRows = '';

        element.className = 'chart-tooltip-custom';

        params.forEach((el: any) => {
            const value = formatter ? formatter(el) : el.value;

            elementRows += `
                <span class="chart-tooltip-custom__marker">${el.marker}</span>
                <span class="chart-tooltip-custom__value">${value}</span>
                <span class="chart-tooltip-custom__separate-item"></span>
            `;
        });

        element.innerHTML = `
            <div class="chart-tooltip-custom__items">${elementRows}</div>
            <div class="chart-tooltip-custom__title">${params[0].name}</div>
        `;

        return element;
    },
    position(pos: any, params: any, dom: any, rect: any, size: any) {
        const top = pos[1] <= size.contentSize[1] + 30
            ? 40
            : pos[1] - size.contentSize[1] - 10;
        const right = size.viewSize[0] - pos[0] <= size.contentSize[0] / 2;
        const left = pos[0] <= size.contentSize[0] / 2;

        if (right) {
            return { right: 0, top };
        }

        if (left) {
            return { left: 0, top };
        }

        return { left: pos[0] - size.contentSize[0] / 2, top, other: {params, dom, rect}};
    },
    extraCssText: 'padding: 0; border: none'
});

export {
    tooltipChartArea,
    tooltipChart
};
