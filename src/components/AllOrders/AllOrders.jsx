/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  Caption,
  Avatar,
  UserWrapper,
} from "./AllOrders.styled";

const AllOrders = ({ filter }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://e-pharmacy-backend-ez9m.onrender.com/api/orders"
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const filteredOrders = filter
    ? orders.filter((order) =>
        order.name.toLowerCase().includes(filter.toLowerCase())
      )
    : orders;

  return (
    <TableContainer>
      <Table>
        <Caption>All orders</Caption>
        <TableHead>
          <TableRow>
            <TableHeader>User Info</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Products</TableHeader>
            <TableHeader>Order date</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>
                <UserWrapper>
                  <Avatar src={order.photo} alt={order.name} />
                  {order.name}
                </UserWrapper>
              </TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell>{order.products}</TableCell>
              <TableCell>{formatDate(order.order_date)}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell type={order.status}>
                <span>{order.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllOrders;
