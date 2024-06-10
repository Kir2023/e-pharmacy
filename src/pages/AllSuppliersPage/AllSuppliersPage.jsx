import { useState } from "react";
import AllSuppliers from "../../components/AllSuppliers/AllSuppliers";
import Filter from "../../components/Filter/Filter";
import { Container } from "../../globalStyles";

const AllSuppliersPage = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = (userName) => {
    setFilter(userName);
  };

  return (
    <Container>
      <Filter handleFilter={handleFilter} placeholder="User Name" />
      <AllSuppliers filter={filter} />
    </Container>
  );
};

export default AllSuppliersPage;
