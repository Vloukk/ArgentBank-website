import React from 'react';
import { useSelector } from 'react-redux';

const UserWelcome = () => {
  const user = useSelector(state => state.user);

  return (
    <div>
      <h2>Welcome back <br /> {user.firstname} {user.lastname}!</h2>
    </div>
  );
};

export default UserWelcome;
