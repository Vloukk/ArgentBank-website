import React, { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../redux/actions/userAction';

//Components
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer'
import UserWelcome from '../../../components/user/userWelcome';

function Profil() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <>
      <div className='profil bg-dark'>
        <Header />
        <UserWelcome />
      </div>
      <Footer />
    </>
  );
}

export default Profil;