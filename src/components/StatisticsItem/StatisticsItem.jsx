import { Stat } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <Stat>
      <span class="label">{label}</span>
      <span class="percentage">{`${percentage}%`}</span>
    </Stat>
  );
};
