/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/orders/ordersOperations";
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
import Pagination from "../Pagination/Pagination";
import TableLoader from "../TableLoader/TableLoader";

const AllOrders = ({ filter }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const ordersPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchOrders());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

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

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          {loading ? (
            <TableRow>
              <TableCell colSpan="6" style={{ textAlign: "center" }}>
                <TableLoader />
              </TableCell>
            </TableRow>
          ) : (
            currentOrders.map((order) => (
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
            ))
          )}
        </TableBody>
      </Table>
      {filteredOrders.length > ordersPerPage && !loading && (
        <Pagination
          totalItems={filteredOrders.length}
          itemsPerPage={ordersPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </TableContainer>
  );
};

export default AllOrders;
