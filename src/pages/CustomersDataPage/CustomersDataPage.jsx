import { useState } from "react";
import Filter from "../../components/Filter/Filter";
import { Container } from "../../globalStyles";
import CustomersData from "../../components/CustomersData/CustomersData";

const CustomersDataPage = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = (userName) => {
    setFilter(userName);
  };

  return (
    <Container>
      <Filter handleFilter={handleFilter} placeholder="User Name" />
      <CustomersData filter={filter} />
    </Container>
  );
};

export default CustomersDataPage;
