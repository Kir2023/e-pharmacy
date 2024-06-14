import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  padding-top: 80px;
  justify-content: center;
  min-height: 100vh;
`;

export const WelcomeText = styled.h1`
  font-size: 24px;
  text-align: center;
  color: var(--main-color);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;
