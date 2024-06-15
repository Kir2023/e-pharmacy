import styled from "styled-components";

export const TableContainer = styled.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`;

export const Table = styled.table`
  background-color: var(--background-color);
  width: 671px;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 960px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
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
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  span {
    display: inline-block;
    padding: 4px 13.5px;
    border-radius: 40px;
    background-color: ${({ type }) => {
      switch (type) {
        case "Cancelled":
          return "rgba(232, 80, 80, 0.1)";
        case "Shipped":
          return "rgba(29, 30, 33, 0.1)";
        case "Completed":
          return "rgba(89, 177, 122, 0.1)";
        case "Processing":
          return "rgba(112, 166, 232, 0.1)";
        case "Pending":
          return "rgba(247, 144, 66, 0.1)";
        case "Confirmed":
          return "rgba(128, 89, 228, 0.1)";
        case "Delivered":
          return "rgba(0, 255, 0, 0.1)";
        default:
          return "rgba(0, 0, 0, 0.05)";
      }
    }};

  color: ${({ type }) => {
    switch (type) {
      case "Completed":
        return "var(--main-color)";
      case "Confirmed":
        return "var(--confirmed-color)";
      case "Pending":
        return "var(--pending-color)";
      case "Cancelled":
        return "var(--cancel-color)";
      case "Processing":
        return "var(--processing-color)";
      case "Shipped":
        return "var(--main-text-color)";
      case "Delivered":
        return "#00ff00";
      default:
        return "inherit";
    }
  }};

  &:last-child {
    border-right: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
