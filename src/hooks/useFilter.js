import { useState } from "react";

const useFilter = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = (userName) => {
    setFilter(userName);
  };

  return {
    filter,
    handleFilter,
  };
};

export default useFilter;
