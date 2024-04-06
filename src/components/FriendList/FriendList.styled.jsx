import styled from 'styled-components';

export const UserList = styled.ul`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const StatusIndicator = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => (props.online ? 'green' : 'red')};
  margin-right: 10px;
`;

export const UserProfile = styled.div`
  margin-right: 10px;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const UserName = styled.span`
  font-size: 18px;
  color: #333;
`;
