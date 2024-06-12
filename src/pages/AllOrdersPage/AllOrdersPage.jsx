import AllOrders from "../../components/AllOrders/AllOrders";
import Filter from "../../components/Filter/Filter";
import { Container } from "../../globalStyles";
import useFilter from "../../hooks/useFilter";

const AllOrdersPage = () => {
  const { filter, handleFilter } = useFilter();

  return (
    <Container>
      <Filter handleFilter={handleFilter} placeholder="User Name" />
      <AllOrders filter={filter} />
    </Container>
  );
};

export default AllOrdersPage;
