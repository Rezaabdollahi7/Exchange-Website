export default function chart(ChartName, Data, Height, Width, Container){
    const color = Data.at(-1) > Data.at(-2) ? "#00ff00" : Data.at(-1) < Data.at(-2) ? "#ff0000" : "#ffff00";
    const additionClass = Data.at(-1) > Data.at(-2) ? "increase" : Data.at(-1) < Data.at(-2) ? 'decrease' : 'equal';
    const options = {
        series: [{
            name: ChartName,
            data: Data // Replace with actual data
        }],
        chart: {
            type: 'line',
            height: Height,
            sparkline: { enabled: true }, // Minimalist chart
        },
        stroke: {
            curve: 'smooth',
            width: Width, 
            colors: color // Neon green line
        },
        tooltip: { enabled: false }, // Hides tooltip
    };

    const chart = new ApexCharts(Container, options);
    chart.render();

    Container.childNodes[0].classList.add(additionClass);
}