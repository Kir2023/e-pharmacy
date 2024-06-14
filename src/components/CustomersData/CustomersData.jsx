/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  Caption,
  UserWrapper,
  Avatar,
} from "./CustomersData.styled";
import Pagination from "../Pagination/Pagination";
import { fetchCustomers } from "../../redux/customers/customersOperations";
import TableLoader from "../TableLoader/TableLoader";
import { Notify } from "notiflix";

const CustomersData = ({ filter }) => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const customersPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCustomers());
        setLoading(false);
      } catch (error) {
        Notify.failure("Error fetching customers");
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const filteredCustomers = filter
    ? customers.filter((customer) =>
        customer.name.toLowerCase().includes(filter.toLowerCase())
      )
    : customers;

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <TableContainer>
      <Table>
        <Caption>Customers data</Caption>
        <TableHead>
          <TableRow>
            <TableHeader>User info</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Register date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan="5" style={{ textAlign: "center" }}>
                <TableLoader />
              </TableCell>
            </TableRow>
          ) : (
            currentCustomers.map((customer) => (
              <TableRow key={customer._id}>
                <TableCell>
                  <UserWrapper>
                    <Avatar src={customer.photo} alt={customer.name} />
                    {customer.name}
                  </UserWrapper>
                </TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{formatDate(customer.register_date)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {filteredCustomers.length > customersPerPage && (
        <Pagination
          totalItems={filteredCustomers.length}
          itemsPerPage={customersPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </TableContainer>
  );
};

export default CustomersData;
