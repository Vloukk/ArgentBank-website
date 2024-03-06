import React, { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../redux/actions/userAction';

//Components
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer'

function Profil() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <>
      <div className='profil bg-dark'>
        <Header />
        <div className='profil__header'>
          <h2>Welcome back <br /> {user.firstname} {user.lastname} </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profil;