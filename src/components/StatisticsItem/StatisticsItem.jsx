import { Stat } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <Stat>
      <span className="label">{label}</span>
      <span className="percentage">{`${percentage}%`}</span>
    </Stat>
  );
};
