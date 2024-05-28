import styled from "styled-components";

export const Title = styled.h1`
  position: absolute;
  width: 149px;
  height: 24px;
  left: 124px;
  top: 17px;
  font-size: 20px;
  line-height: 24px;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    height: 28px;
    width: 190px;
    left: 152px;
    right: 443px;
    top: 15px;
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    left: 120px;
    right: 1147px;
  }
`;
