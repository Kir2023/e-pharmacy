import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  Caption,
} from "./RecentCustomers.styled";
import { fetchDashboard } from "../../redux/dashboard/dashboardOperations";

const RecentCustomers = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.dashboard.recentCustomers);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  return (
    <TableContainer>
      <Table>
        <Caption>Recent Customers</Caption>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Spent</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer._id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.spent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentCustomers;
