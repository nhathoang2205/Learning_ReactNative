// Main filterFriendStatus.js
const filterFriends = (friends, filter) => {

  switch (filter) {

      case 'active': {
          return friends.filter(friend => friend.status === 'ACTIVE') ;
      };

      case 'reject': {
          return friends.filter(friend => friend.status === 'REJECT');
      };

      case 'pending': {
          return friends.filter(friend => friend.status === 'PENDING');
      };

      default: {
          return friends;
      };
  };
};

export default filterFriends
