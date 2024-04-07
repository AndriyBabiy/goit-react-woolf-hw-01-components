import {
  StatusIndicatorOffline,
  StatusIndicatorOnline,
  UserImage,
  UserItem,
  UserName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <UserItem>
    {isOnline ? <StatusIndicatorOnline /> : <StatusIndicatorOffline />}
    <UserImage src={avatar} alt="User avatar" width="48" />
    <UserName>{name}</UserName>
  </UserItem>
);
