import PropTypes from 'prop-types';
import { FriendName, FriendAvatar, FriendStatus } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
       <>
       <FriendStatus isOn={isOnline}>{isOnline}</FriendStatus>
       <FriendAvatar src={avatar} alt='User avatar' width='48px' />
       <FriendName>{name}</FriendName>
       </>
    )
  }

  FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

  export default FriendListItem