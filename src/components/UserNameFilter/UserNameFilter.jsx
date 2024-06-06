/* eslint-disable react/prop-types */
import { useState } from "react";
import { FilterContainer, Input, Button } from "./UserNameFilter.styled";

const UserNameFilter = ({ handleFilter }) => {
  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleFilter(userName);
    }
  };

  return (
    <FilterContainer>
      <Input
        type="text"
        value={userName}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="User Name"
      />
      <Button onClick={() => handleFilter(userName)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <use href="./sprite.svg#icon-filter" />
        </svg>
        Filter
      </Button>
    </FilterContainer>
  );
};

export default UserNameFilter;
