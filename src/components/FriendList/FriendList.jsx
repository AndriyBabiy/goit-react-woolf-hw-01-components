import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { UserList } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <UserList>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </UserList>
);
