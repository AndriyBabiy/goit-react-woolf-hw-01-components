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
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </Stat>
      <Stat>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </Stat>
      <Stat>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </Stat>
    </ProfileStats>
  </ProfileCard>
);
