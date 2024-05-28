import styled from "styled-components";

export const LogoWrapper = styled.div`
  cursor: pointer;
`;

export const LogoImg = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 72px;
  top: 24px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    left: 80px;
    top: 20px;
  }

  @media screen and (min-width: 1440px) {
    left: 20px;
    top: 18px;
  }
`;
