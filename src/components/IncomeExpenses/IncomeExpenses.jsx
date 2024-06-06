import axios from "axios";
import { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  Caption,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCellType,
  TableCellName,
  TableCellAmount,
} from "./IncomeExpenses.styled";

const IncomeExpenses = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard"
        );
        setTransactions(response.data.recentTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <TableContainer>
      <Table>
        <Caption>Income/Expenses</Caption>
        <TableHead>
          <TableRow>
            <TableHeader>Today</TableHeader>
            <TableHeader></TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction._id}>
              <TableCellType type={transaction.type}>
                <span>{transaction.type}</span>
              </TableCellType>
              <TableCellName>{transaction.name}</TableCellName>
              <TableCellAmount type={transaction.type}>
                {transaction.amount}
              </TableCellAmount>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IncomeExpenses;
