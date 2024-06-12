import AllProducts from "../../components/AllProducts/AllProducts";
import Filter from "../../components/Filter/Filter";
import { Container } from "../../globalStyles";
import useFilter from "../../hooks/useFilter";

const AllProductsPage = () => {
  const { filter, handleFilter } = useFilter();

  return (
    <Container>
      <Filter handleFilter={handleFilter} placeholder="Product Name" />
      <AllProducts filter={filter} />
    </Container>
  );
};

export default AllProductsPage;
