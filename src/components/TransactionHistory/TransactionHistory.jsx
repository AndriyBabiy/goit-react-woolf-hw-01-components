import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import { Table, TableHead, TableHeaderCell } from './TransactionHistory.styled';

export const Transactions = ({ transactions }) => (
  <Table>
    <TableHead>
      <tr>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Amount</TableHeaderCell>
        <TableHeaderCell>Currency</TableHeaderCell>
      </tr>
    </TableHead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <TransactionItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </Table>
);
