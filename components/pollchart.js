import PollChartBar from "./pollchartbar";

function PollChart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = dataPointValues.reduce((a, b) => a + b, 0);

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "12px",
        backgroundColor: "#262626",
        width: "fit-content",
        textAlign: "center",
        display: "flex",
        height: "400px",
        transform: "rotate(90deg)",
      }}
    >
      {props.dataPoints.map((dataPoint) => (
        <PollChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}

export default PollChart;
