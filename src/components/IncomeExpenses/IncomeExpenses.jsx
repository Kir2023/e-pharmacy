import axios from 'axios';
import { useEffect, useState } from 'react';
import { TableContainer, Table } from './IncomeExpenses.styled';

const IncomeExpenses = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard');
        setTransactions(response.data.recentTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <TableContainer>
      <Table>
        <caption>Income/Expenses</caption>
        <thead>
          <tr>
            <th>Today</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.type}</td>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default IncomeExpenses;
