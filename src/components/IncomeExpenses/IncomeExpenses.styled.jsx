import styled from "styled-components";

export const TableContainer = styled.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 768px) {
    max-width: 630px;
  }
`;

export const Table = styled.table`
  background-color: #ffffff;
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 630px;
    height: 512px;
  }
`;

export const Caption = styled.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TableHead = styled.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 14px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

export const TableCellType = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  
  span {
    display: inline-block;
    padding: 4px 13.5px;
    border-radius: 40px;
    background-color: ${({ type }) => {
      switch (type) {
        case "Expense":
          return "rgba(232, 80, 80, 0.1)";
        case "Error":
          return "rgba(29, 30, 33, 0.1)";
        case "Income":
          return "rgba(89, 177, 122, 0.1)";
        default:
          return "rgba(0, 0, 0, 0.05)";
      }
    }};
  
  color: ${({ type }) => {
    switch (type) {
      case "Expense":
        return "var(--cancel-color)";
      case "Error":
        return "var(--main-text-color)";
      case "Income":
        return "var(--main-color)";
      default:
        return "inherit";
    }
  }};

  @media screen and (min-width: 768px) {
    font-size: 14px;
`;

export const TableCellName = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
`;

export const TableCellAmount = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: ${({ type }) => {
    switch (type) {
      case "Expense":
        return "var(--cancel-color)";
      case "Error":
        return "var(--main-text-color)";
      case "Income":
        return "var(--main-color)";
      default:
        return "inherit";
    }
  }};

  @media screen and (min-width: 768px) {
    font-size: 16px;
`;
