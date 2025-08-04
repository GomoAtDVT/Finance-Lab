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

  let arr = monthlyTransactions.map(transaction => transaction.category);
  let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  const data = {
    labels: newArr.slice(0,5),
    datasets: [
      {
        label: 'Categories',
        data: monthlyTransactions.slice(0,5).map(transaction => transaction.amount),
        backgroundColor: [
          '#ffb703', '#669BBC', '#023047', '#fb8500', '#8ecae6',
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
