import styled from "styled-components";

export const StatisticWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
`;

export const StatisticItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: calc((100% - 20px) / 2);
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 8px;
  padding: 14px;

  &:first-child {
    border: 1px solid var(--main-color);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 40px) / 3);
    padding-left: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 240px;
  }
`;

export const StatisticLabel = styled.span`
  font-size: 12px;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    width: 18px;
    height: 18px;
    stroke-width: 2.4;
    stroke: var(--main-text-color);
    fill: var(--background-color);
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const StatisticValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
