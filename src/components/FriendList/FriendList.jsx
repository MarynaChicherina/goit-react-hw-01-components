import FriendListItem from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {

    return (
      <ul className="friend-list">
        {
            friends.map((friend) => (
                <li key={friend.id}>
                <FriendListItem
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}
                />
             </li>
            ))
        }
      </ul>
    )
  }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape)    
}

  export default FriendList