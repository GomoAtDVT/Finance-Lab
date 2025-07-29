// components/DoughnutChart.jsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({transactions, user,setUser }) => {
  const data = {
    labels: transactions.map(transaction => transaction.category),
    datasets: [
      {
        label: 'Categories',
        data: transactions.map(transaction => transaction.amount),
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
