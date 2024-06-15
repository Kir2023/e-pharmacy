import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  right: 12px;
  bottom: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 44px;
  z-index: 10;

  &:hover .icon-logout,
  &:focus .icon-logout {
    fill: var(--active-color);
  }

  @media screen and (min-width: 1440px) {
    right: 40px;
    top: 18px;
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
