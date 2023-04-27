import PropTypes from 'prop-types';
import { Image, ProfileCard, StatsCard, StatsElement, StatsLabel, StatsQuantity, ProfileName, ProfileTag, ProfileLocation } from './Profile.styled';


const Profile = ({ username, tag, location, avatar, stats }) => {

    return (
      <ProfileCard className='profile'>
      <div className='description'>
        <Image src={avatar} alt='User avatar' className='avatar' /> 
        <ProfileName className='name'>{username}</ProfileName>
        <ProfileTag className='tag'>@{tag}</ProfileTag>
        <ProfileLocation className='location'>{location}</ProfileLocation>
      </div>
      <StatsCard className='stats'>
        <StatsElement>
         <StatsLabel className='label'>Followers</StatsLabel>
         <StatsQuantity className='quantity'>{stats.followers}</StatsQuantity>
        </StatsElement>
        <StatsElement>
         <StatsLabel className='label'>Views</StatsLabel>
         <StatsQuantity className='quantity'>{stats.views}</StatsQuantity>
        </StatsElement>
        <StatsElement>
         <StatsLabel className='label'>Likes</StatsLabel>
         <StatsQuantity className='quantity'>{stats.likes}</StatsQuantity>
        </StatsElement>
      </StatsCard>
    </ProfileCard>
    )
  }

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })

  };

  export default Profile