import styled from 'styled-components';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Stat = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  background-color: ${props => props.bgColor || getRandomColor()};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 16px;
    font-weight: normal;
  }

  .percentage {
    padding-top: 4px;
  }
`;
