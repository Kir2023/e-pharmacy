import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 614px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
  }
`;

export const PageDot = styled.button`
  width: 9.5px;
  height: 9.5px;
  background-color: #e7f1ed;
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: var(--main-color);
  }

  &:hover {
    background-color: var(--active-color);
  }
`;
