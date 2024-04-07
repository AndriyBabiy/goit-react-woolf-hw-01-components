import styled from 'styled-components';

export const StatsContainer = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: auto;
  overflow: hidden;
`;

export const StatsHeader = styled.h2`
  color: #333;
  font-size: 18px;
  padding: 10px;
  margin: 0;
`;

export const StatsBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  font-size: 16px;
`;
