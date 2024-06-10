import styled from "styled-components";

export const TableContainer = styled.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1320px;
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

export const Table = styled.table`
  background-color: #ffffff;
  width: 671px;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 960px;
  }

  @media screen and (min-width: 1440px) {
    width: 1320px;
  }
`;

export const TableHead = styled.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
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

  span {
    display: flex;
    gap: 8px;
  }

  &:last-child {
    border-right: none;
  }

  span {
    display: inline-block;
    padding: 4px 13.5px;
    border-radius: 40px;
    background-color: ${({ type }) => {
      switch (type) {
        case "Active":
          return "rgba(89, 177, 122, 0.1)";
        case "Deactive":
          return "rgba(232, 80, 80, 0.1)";
        default:
          return "rgba(0, 0, 0, 0.05)";
      }
    }};

    color: ${({ type }) => {
      switch (type) {
        case "Active":
          return "var(--main-color)";
        case "Deactive":
          return "var(--cancel-color)";
        default:
          return "inherit";
      }
    }};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TableBody = styled.tbody``;

export const AddButton = styled.button`
  margin-bottom: 10px;
  padding: 13px 30px;
  background-color: #fff;
  color: var(--main-text-color);
  cursor: pointer;
  border: 1px solid rgba(89, 177, 122, 0.5);
  border-radius: 60px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  &:hover {
    background-color: var(--active-color);
    color: #fff;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    position: absolute;
    left: 1223px;
    top: 117px;
    margin-bottom: 0;
  }
`;

export const EditButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 17px;
  gap: 4px;
  border: 1px solid rgba(89, 177, 122, 0.5);
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  background-color: #fff;
  color: var(--main-color);

  svg {
    width: 14px;
    height: 14px;
    fill: none;
    stroke: var(--main-color);
  }

  &:hover,
  &:focus {
    background-color: var(--main-color);
    color: #fff;
  }

  &:hover svg,
  &:focus svg {
    stroke: #fff;
  }
`;
