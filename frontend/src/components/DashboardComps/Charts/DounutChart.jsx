// components/DoughnutChart.jsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ labels, dataValues }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Categories',
        data: dataValues,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        ],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
