import { Profile, Statistics, FriendList, Transactions } from 'components';

import profile from 'data/user.json';
import friends from 'data/friends.json';
import data from 'data/data.json';
import transactions from 'data/transactions.json';
import { Container, TitleArea } from './App.styled';

export const App = () => {
  return (
    <Container>
      <TitleArea>React homework 1</TitleArea>
      <Profile {...profile} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </Container>
  );
};
