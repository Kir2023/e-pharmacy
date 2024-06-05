import axios from 'axios';
import { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from './RecentCustomers.styled';

const RecentCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard');
        setCustomers(response.data.recentCustomers);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <TableContainer>
      <Table>
      <caption>Recent Customers</caption>
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
