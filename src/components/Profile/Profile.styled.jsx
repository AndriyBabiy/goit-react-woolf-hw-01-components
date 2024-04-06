import styled from 'styled-components';

export const ProfileCard = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  margin: auto;
`;

export const ProfileImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Name = styled.p`
  margin: 0;
  color: #333;
  font-size: 22px;
  font-weight: bold;
`;

export const Location = styled.p`
  color: #666;
  font-size: 18px;
`;

export const Tag = styled.p`
  color: #666;
  font-size: 18px;
  margin: 5px 0;
`;

export const ProfileStats = styled.div`
  background-color: #f7f7f7;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
`;

export const Stat = styled.div`
  font-size: 16px;
  color: #333;

  span.label {
    display: block;
    color: #666;
    font-size: 14px;
    margin-top: 4px;
  }

  span.quantity {
    display: block;
    font-weight: bold;
    margin-top: 4px;
  }
`;
