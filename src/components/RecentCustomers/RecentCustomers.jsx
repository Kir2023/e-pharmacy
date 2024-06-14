/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
import TableLoader from "../TableLoader/TableLoader";
import { Notify } from "notiflix";

const RecentCustomers = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.dashboard.recentCustomers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchDashboard());
        setLoading(false);
      } catch (error) {
        Notify.failure("Error fetching recent customers");
        setLoading(false);
      }
    };

    fetchData();
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
          {loading ? (
            <TableRow>
              <TableCell colSpan="3" style={{ textAlign: "center" }}>
                <TableLoader />
              </TableCell>
            </TableRow>
          ) : (
            customers.map((customer) => (
              <TableRow key={customer._id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.spent}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentCustomers;
