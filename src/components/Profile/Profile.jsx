import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, statsFollowers, statsLikes, statsViews }) => {

    return (
      <div className='profile'>
      <div className='description'>
        <img src={avatar} alt='User avatar' className='avatar' /> 
        <p className='name'>{username}</p>
        <p className='tag'>@{tag}</p>
        <p className='location'>{location}</p>
      </div>
      <ul className='stats'>
        <li>
         <span className='label'>Followers</span>
         <span className='quantity'>{statsFollowers}</span>
        </li>
        <li>
         <span className='label'>Views</span>
         <span className='quantity'>{statsViews}</span>
        </li>
        <li>
         <span className='label'>Likes</span>
         <span className='quantity'>{statsLikes}</span>
        </li>
      </ul>
    </div>
    )
  }

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    statsLikes: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
    statsFollowers: PropTypes.number.isRequired,
  };

  export default Profile