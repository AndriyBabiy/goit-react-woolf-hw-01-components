import {
  StatusIndicator,
  UserImage,
  UserItem,
  UserName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <UserItem>
    <StatusIndicator online={isOnline} />
    <UserImage src={avatar} alt="User avatar" width="48" />
    <UserName>{name}</UserName>
  </UserItem>
);
