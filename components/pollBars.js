import PollChart from "./pollchart";

function PollBar() {
    const chartDataPoints = [
        { label: '1', value: 100 },
        { label: '2', value: 73 },
        { label: '3', value: 95 },
    ];

    return <PollChart dataPoints={chartDataPoints} />;
}

export default PollBar;