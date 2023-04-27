import FriendListItem from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import { Friends, FriendsItem } from './FriendList.styled';


const FriendList = ({ friends }) => {

    return (
      <Friends>
        {
            friends.map((friend) => (
                <FriendsItem key={friend.id}>
                <FriendListItem
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}
                />
             </FriendsItem>
            ))
        }
      </Friends>
    )
  }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired}))    
}

  export default FriendList