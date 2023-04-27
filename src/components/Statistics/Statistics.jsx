
import PropTypes from 'prop-types';
import { StatisticsSection,  StatisticsTitle, StatisticsList, StatisticsLabel,  StatisticsPercentage, StatisticsItem } from './Statistics.styled';



const Statistics = ({title, stats}) => {
return (
<StatisticsSection>
    {title && (<StatisticsTitle>{title}</StatisticsTitle>)}
<StatisticsList>
        {
            stats.map((stat) => (
                
                <StatisticsItem key={stat.id} >
                    <>
                    <StatisticsLabel>{stat.label}</StatisticsLabel>
                    <StatisticsPercentage>{stat.percentage}%</StatisticsPercentage>
                    </>
                </StatisticsItem>
            ))
        }
</StatisticsList>
</StatisticsSection>
)
}

 Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))   
  }

  export default Statistics