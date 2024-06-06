import { useState } from "react";
import AllOrders from "../../components/AllOrders/AllOrders";
import UserNameFilter from "../../components/UserNameFilter/UserNameFilter";
import { Container } from "../../globalStyles";

const AllOrdersPage = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = (userName) => {
    setFilter(userName);
  };

  return (
    <Container>
      <UserNameFilter handleFilter={handleFilter} />
      <AllOrders filter={filter} />
    </Container>
  );
};

export default AllOrdersPage;
