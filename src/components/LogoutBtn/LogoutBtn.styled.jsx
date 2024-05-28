import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  right: 40px;
  top: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover .icon-logout,
  &:focus .icon-logout {
    fill: var(--active-color);
  }
`;

export const Icon = styled.svg`
  width: 38px;
  height: 38px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
