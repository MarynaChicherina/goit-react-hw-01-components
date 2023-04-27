import PropTypes from 'prop-types';
import { Image, ProfileCard, StatsCard, StatsElement, StatsLabel, StatsQuantity, ProfileName, ProfileTag, ProfileLocation } from './Profile.styled';


const Profile = ({ username, tag, location, avatar, stats }) => {

    return (
      <ProfileCard>
      <div className='description'>
        <Image src={avatar} alt='User avatar'  /> 
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </div>
      <StatsCard>

        <StatsElement>
         <StatsLabel>Followers</StatsLabel>
         <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsElement>

        <StatsElement>
         <StatsLabel>Views</StatsLabel>
         <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsElement>

        <StatsElement>
         <StatsLabel>Likes</StatsLabel>
         <StatsQuantity>{stats.likes}</StatsQuantity>
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