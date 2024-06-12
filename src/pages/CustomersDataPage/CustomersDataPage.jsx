import Filter from "../../components/Filter/Filter";
import { Container } from "../../globalStyles";
import CustomersData from "../../components/CustomersData/CustomersData";
import useFilter from "../../hooks/useFilter";

const CustomersDataPage = () => {
  const { filter, handleFilter } = useFilter();

  return (
    <Container>
      <Filter handleFilter={handleFilter} placeholder="User Name" />
      <CustomersData filter={filter} />
    </Container>
  );
};

export default CustomersDataPage;
