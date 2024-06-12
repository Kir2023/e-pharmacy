import AllSuppliers from "../../components/AllSuppliers/AllSuppliers";
import Filter from "../../components/Filter/Filter";
import { Container } from "../../globalStyles";
import useFilter from "../../hooks/useFilter";

const AllSuppliersPage = () => {
  const { filter, handleFilter } = useFilter();

  return (
    <Container>
      <Filter handleFilter={handleFilter} placeholder="User Name" />
      <AllSuppliers filter={filter} />
    </Container>
  );
};

export default AllSuppliersPage;
