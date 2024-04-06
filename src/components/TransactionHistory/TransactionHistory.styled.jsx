import styled from 'styled-components';

export const Table = styled.table`
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 4;
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const TableHead = styled.thead`
  background-color: #00bcd4;
  color: white;
`;

export const TableHeaderCell = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
`;
