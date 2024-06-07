import { useState } from "react";
import AllProducts from "../../components/AllProducts/AllProducts";
import Filter from "../../components/Filter/Filter";
import { Container } from "../../globalStyles";

const AllProductsPage = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = (userName) => {
    setFilter(userName);
  };

  return (
    <Container>
      <Filter handleFilter={handleFilter} placeholder="Product Name" />
      <AllProducts filter={filter} />
    </Container>
  );
};

export default AllProductsPage;
