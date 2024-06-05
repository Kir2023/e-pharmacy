import styled from 'styled-components';

export const TableContainer = styled.div`
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  caption {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
