import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

const LineChart = (props) => {
  const month = props.score_time;
  return <Line data={{
    //labels: month.getMonth(),
    datasets: props.score_value
  }} />;
};
export default LineChart;