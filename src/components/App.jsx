import user from './Profile/user.json';
import Profile from './Profile/Profile';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';


export const App = () => {
  const title = true;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    statsFollowers={user.stats.followers}
    statsLikes={user.stats.likes}
    statsViews={user.stats.views}
  />
  {title ? <Statistics title="Upload stats" stats={data} /> : <Statistics stats={data} />}
  <FriendList friends={friends} />
    </div>
  );
};
