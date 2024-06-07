import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 20px;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Caption = styled.caption`
  caption-side: top;
  font-size: 24px;
  margin: 10px 0;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageDot = styled.button`
  width: 9.5px;
  height: 9.5px;
  background-color: ${(props) =>
    props.active ? "var(--main-color)" : "#E7F1ED"};
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--main-color)" : "var(--active-color)"};
  }
`;
