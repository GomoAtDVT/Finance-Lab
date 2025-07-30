// components/DoughnutChart.jsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);
  async function fetchTransaction() {
    try{axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    let transactions = await axios.get('http://localhost:5000/api/transactions')
    setMonthlyTransactions(transactions.data.myTransactions);
  } catch (error) {
      console.error("Error fetching monthly income:", error);
    }
  }

  useEffect( () => {
      fetchTransaction();
  },[]);
  const data = {
    labels: monthlyTransactions.map(transaction => transaction.category),
    datasets: [
      {
        label: 'Categories',
        data: monthlyTransactions.map(transaction => transaction.amount),
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
