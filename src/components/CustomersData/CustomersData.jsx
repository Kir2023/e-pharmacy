/* eslint-disable react/prop-types */
import axios from "axios";
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

const CustomersData = ({ filter }) => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          "https://e-pharmacy-backend-ez9m.onrender.com/api/customers"
        );
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

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
            <TableHeader>Adress</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Register date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentCustomers.map((customer) => (
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
          ))}
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
