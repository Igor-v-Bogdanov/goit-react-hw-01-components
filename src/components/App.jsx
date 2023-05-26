import user from 'components/data/user';
import { Profile } from './Profile/Profile';
import data from 'components/data/data';
import { Statistics } from './Statistics/Statistics';
import friends from 'components/data/friends';
import { FriendList } from './FriendList/FriendList';
import transactions from 'components/data/transactions';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
