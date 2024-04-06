import {
  Location,
  Name,
  ProfileCard,
  ProfileDescription,
  ProfileImage,
  ProfileStats,
  Stat,
  Tag,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <ProfileCard>
    <ProfileDescription>
      <ProfileImage src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>{`@${tag}`}</Tag>
      <Location>{location}</Location>
    </ProfileDescription>

    <ProfileStats>
      <Stat>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </Stat>
      <Stat>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </Stat>
      <Stat>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </Stat>
    </ProfileStats>
  </ProfileCard>
);
