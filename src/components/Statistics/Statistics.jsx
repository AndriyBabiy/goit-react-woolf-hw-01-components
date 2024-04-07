import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import { StatsBar, StatsContainer, StatsHeader } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsContainer>
      {title && <StatsHeader>{title}</StatsHeader>}

      <StatsBar>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatsBar>
    </StatsContainer>
  );
};
