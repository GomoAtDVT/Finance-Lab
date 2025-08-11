// components/DoughnutChart.jsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryDoughnutChart = () => {
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);
  async function fetchTransaction() {
    try{axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
     let IncomeResponse = await axios.get(
      "http://localhost:5000/api/transactions/incomes"
    );
    setMonthlyTransactions(IncomeResponse.data.myIncome);
  } catch (error) {
      console.error("Error fetching monthly income:", error);
    }
  }

  useEffect( () => {
      fetchTransaction();
  },[]);

  let arr = monthlyTransactions.map(transaction => `${transaction.category} - R${transaction.amount}`);
  let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  const data = {
    labels: arr,
    datasets: [
      {
        label: 'Categories',
        data: monthlyTransactions.map(transaction => transaction.amount),
        backgroundColor: [
         '#008000',  '#b7e4c7',  '#FFCE56', '#9ef01a', '#2d6a4f',
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

export default CategoryDoughnutChart;
