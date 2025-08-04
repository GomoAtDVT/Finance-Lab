// components/DoughnutChart.jsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpCategoryDoughnutChart = () => {
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);
  async function fetchTransaction() {
     try{axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    let ExpenseResponse = await axios.get(
      "http://localhost:5000/api/transactions/expenses"
    );
    setMonthlyTransactions(ExpenseResponse.data.myExpenses);
  } catch (error) {
      console.error("Error fetching monthly income:", error);
    }
  }

  useEffect( () => {
      fetchTransaction();
  },[]);

  let arr = monthlyTransactions.map(transaction => `${transaction.category}, ${transaction.name} - R${transaction.amount}`);
  let cashArr = monthlyTransactions.map(transaction => transaction.amount);
  const combo = `${arr} - ${cashArr}`
  let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  const data = {
    labels: arr,
    datasets: [
      {
        label: 'Categories',
        data: monthlyTransactions.map(transaction => transaction.amount),
        backgroundColor: [
          '#d90429', '#ffbd00', '#ef233c', '#8d99ae', '#2b2d42',
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

export default ExpCategoryDoughnutChart;
