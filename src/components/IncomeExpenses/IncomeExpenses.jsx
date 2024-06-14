/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
import TableLoader from "../TableLoader/TableLoader";
import { Notify } from "notiflix";

const IncomeExpenses = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.dashboard.transactions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchDashboard());
        setLoading(false);
      } catch (error) {
        Notify.failure("Error fetching dashboard data");
        setLoading(false);
      }
    };

    fetchData();
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
          {loading ? (
            <TableRow>
              <TableCellType colSpan="3" style={{ textAlign: "center" }}>
                <TableLoader />
              </TableCellType>
            </TableRow>
          ) : (
            transactions.map((transaction) => (
              <TableRow key={transaction._id}>
                <TableCellType type={transaction.type}>
                  <span>{transaction.type}</span>
                </TableCellType>
                <TableCellName>{transaction.name}</TableCellName>
                <TableCellAmount type={transaction.type}>
                  {transaction.amount}
                </TableCellAmount>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IncomeExpenses;
