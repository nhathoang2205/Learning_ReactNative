// Main define filter friend
const filterFriend = (friends, filter) => {

  switch (filter) {

    case 'ACTIVE':
      return friends.filter(friend => friend.status === 'ACTIVE');

    case 'REJECT':
      return friends.filter(friend => friend.status === 'REJECT');

    case 'PENDING':
      return friends.filter(friend => friend.status === 'PENDING');

    default:
      return friends;
  };
};


export default filterFriend;