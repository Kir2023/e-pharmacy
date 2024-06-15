import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 335px;
  padding-left: 24px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    max-width: 1087px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  width: 172px;
  height: 44px;
  left: 20px;
  top: 24px;

  @media screen and (min-width: 768px) {
    left: 32px;
  }

  @media screen and (min-width: 1440px) {
    left: 100px;
    top: 28px;
  }
`;

export const Title = styled.h1`
  color: var(--main-text-color);
  font-size: 28px;
  position: absolute;
  width: 335px;
  height: 136px;
  left: 20px;
  top: 216px;
  line-height: 34px;

  & span {
    color: var(--main-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 54px;
    width: 614px;
    height: 240px;
    left: 32px;
    top: 272px;
    line-height: 60px;
  }

  @media screen and (min-width: 1440px) {
    left: 100px;
    top: 298px;
  }
`;

export const Img = styled.img`
  position: absolute;
  width: 95px;
  height: 93px;
  left: 240px;
  top: 160px;

  @media screen and (min-width: 768px) {
    width: 179px;
    height: 175px;
    left: 448px;
    top: 168px;
  }

  @media screen and (min-width: 1440px) {
    left: 516px;
    top: 194px;
  }
`;

export const DecorImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;
