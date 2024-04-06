import styled from 'styled-components';

export const TitleArea = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 40px;
  text-align: center;
  color: '#010101';
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  grid-template-rows: auto 1fr 1fr;
  box-sizing: 'border-box';
  gap: 16px;
  padding: 16px;
  height: 100%;
  background-color: #ccc;
`;
