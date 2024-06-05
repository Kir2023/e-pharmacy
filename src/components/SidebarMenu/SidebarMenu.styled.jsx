import styled from "styled-components";

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f7f8fa;
  height: 100vh;
  width: 84px;
  box-sizing: border-box;
  border-width: 1px 1px 0px 0px;
  border-style: solid;
  border-color: rgba(29, 30, 33, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 2;

  &.no-scroll {
    overflow: hidden;
  }

  &.open {
    transform: translateX(0);
    min-height: 100vh;
  }

  .logout-btn {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    transform: translateX(0);
    margin-top: 80px;

    .logout-btn {
      display: none;
    }
  }
`;

export const MenuList = styled.ul`
  margin-top: 92px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`;

export const MenuItem = styled.li`
  margin-bottom: 20px;
  list-style: none;

  a {
    &.active {
      color: var(--active-color);

      svg {
        fill: var(--active-color);
      }
    }

    svg {
      fill: var(--button-background-color);
    }
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

export const ToggleButton = styled.button`
  position: fixed;
  top: 24px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;

  &.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  svg {
    width: 32px;
    height: 32px;
    stroke: #000;
    stroke-width: 2;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }

  &.hidden {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
