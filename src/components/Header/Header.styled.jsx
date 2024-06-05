import styled from "styled-components";

export const Wrapper = styled.header`
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  background-color: #f7f8fa;
  height: 80px;
  min-width: 100vw;

  .logout-btn {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    .logout-btn {
      display: flex;
    }
  }
`;
