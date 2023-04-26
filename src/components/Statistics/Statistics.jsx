
import PropTypes from 'prop-types';



const Statistics = ({title, stats}) => {
return (
<section className='statistics'>
<h2 className='title'>{title}</h2>
<ul className='stat-list'>
  <li className='item'>
    <span className='label'>{stats.label}</span>
    <span className='percentage'>{stats.percentage}</span>
  </li>
  <li className='item'>
    <span className='label'>{stats.label}</span>
    <span className='percentage'>{stats.percentage}</span>
  </li>
  <li className='item'>
    <span className='label'>{stats.label}</span>
    <span className='percentage'>{stats.percentage}</span>
  </li>
  <li className='item'>
    <span className='label'>{stats.label}</span>
    <span className='percentage'>{stats.percentage}</span>
  </li>
</ul>
</section>
)
}
// const Statistics = ({title, stats}) => {
//     return (
//     <section className='statistics'>
//     <h2 className='title'>{title}</h2>
//     <ul className='stat-list'>
//     {stats.map((el) => {
//     <li key={el.id} className='item'>
//     <span className='label'>{el.label}</span>
//     <span className='percentage'>{el.percentage}</span>
//     </li>
//     })}
//     </ul>
//     </section>
//     )
//     }
 
 Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
  }

  export default Statistics