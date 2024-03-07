import React from 'react';
import { useSelector } from 'react-redux';

const UserWelcome = () => {
  const user = useSelector(state => state.user);

  return (
    <div className='user__welcome'>
      <h2>Welcome back <br /> {user.firstname} {user.lastname}!</h2>
      <button className='btn-user'>Edit Name</button>
    </div>
  );
};

export default UserWelcome;
