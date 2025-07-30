// components/BarChart.jsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const [expenses, setExpenses] = useState([]);
     async function GetExpense() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    let ExpenseResponse = await axios.get(
      "http://localhost:5000/api/transactions/expenses"
    );
    setExpenses(ExpenseResponse.data.myExpenses);
  }
  useEffect(() => {
    GetExpense();
  }, []);
  const data = {
    labels: expenses.slice(0, 5).map(transaction => transaction.name),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map(transaction => transaction.amount),
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
