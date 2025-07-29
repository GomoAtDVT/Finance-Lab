// components/BarChart.jsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ labels, dataValues }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses',
        data: dataValues,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
