import styled from "styled-components";

export const LoginBtn = styled.button`
  background-color: var(--main-color);
  width: 335px;

  &:hover,
  :focus {
    background-color: var(--active-color);
  }

  @media screen and (min-width: 768px) {
    width: 323px;
  }
`;
