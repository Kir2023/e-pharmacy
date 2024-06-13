import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchDashboard } from "../../redux/dashboard/dashboardOperations";

const IncomeExpenses = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.dashboard.transactions);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

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
