import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 140px;

  @media screen and (min-width: 768px) {
    padding-top: 440px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 1000px;
    top: -140px;
  }
`;

export const Input = styled.input`
  background-color: var(--background-color);
  width: 335px;
  height: 44px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;

  &::placeholder {
    font-size: 12px;
    padding-left: 18px;
    color: rgba(29, 30, 33, 0.4);
  }

  &:hover,
  :focus {
    border: 1px solid var(--active-color);
  }

  @media screen and (min-width: 768px) {
    width: 323px;
  }
`;

export const LoginBtn = styled.button`
  background-color: var(--main-color);
  width: 335px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 60px;

  &:hover,
  :focus {
    background-color: var(--active-color);
  }

  @media screen and (min-width: 768px) {
    width: 323px;
  }
`;
