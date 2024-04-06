import styled from 'styled-components';

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

export const TableCell = styled.td`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
`;
