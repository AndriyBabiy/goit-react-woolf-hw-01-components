import { TableCell, TableRow } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => (
  <TableRow>
    <TableCell>{type}</TableCell>
    <TableCell>{amount}</TableCell>
    <TableCell>{currency}</TableCell>
  </TableRow>
);
