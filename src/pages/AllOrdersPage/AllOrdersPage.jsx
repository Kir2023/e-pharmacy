import { useState } from "react";
import AllOrders from "../../components/AllOrders/AllOrders";
import Filter from "../../components/Filter/Filter";
import { Container } from "../../globalStyles";

const AllOrdersPage = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = (userName) => {
    setFilter(userName);
  };

  return (
    <Container>
      <Filter handleFilter={handleFilter} placeholder="User Name" />
      <AllOrders filter={filter} />
    </Container>
  );
};

export default AllOrdersPage;
