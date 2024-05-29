import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  position: absolute;
  width: 194px;
  height: 18px;
  left: 124px;
  top: 45px;

  @media screen and (min-width: 768px) {
    width: 202px;
    height: 18px;
    left: 152px;
    top: 47px;
  }

  @media screen and (min-width: 1440px) {
    left: 120px;
  }
`;

export const StyledLink = styled.span`
  cursor: pointer;
  text-decoration: none;
  color: rgba(29, 30, 33, 0.4);
  font-size: 12px;
`;

export const StyledText = styled.p`
  color: rgba(29, 30, 33, 0.4);
  font-size: 12px;
`;
