import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 380px;

  @media screen and (min-width: 768px) {
    padding-top: 540px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 1000px;
    padding-top: 270px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  background-color: var(--background-color);
  color: var(--main-text-color);
  font-size: 12px;
  padding-left: 18px;
  padding-right: 40px; /* Add padding for the password toggle button */
  width: 335px;
  height: 44px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;

  &::placeholder {
    font-size: 12px;
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
  height: 44px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 60px;
  border: none;

  &:hover,
  :focus {
    background-color: var(--active-color);
  }

  @media screen and (min-width: 768px) {
    width: 323px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-left: 0;
  }
`;

export const PasswordToggleBtn = styled.button`
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: var(--main-text-color);
    fill: currentColor;
  }

  @media screen and (min-width: 768px) {
    right: 260px;
  }

  @media screen and (min-width: 1440px) {
    right: 10px;
  }
`;
