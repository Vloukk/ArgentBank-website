import React, { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../redux/actions/userAction';

//Components
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer'
import UserWelcome from '../../../components/user/userWelcome';
import Card from '../../../components/cardtransaction/card';

import AccountDtata from '../../../datas/AccountData.json'

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
        <div className='card__galery'>
            {AccountDtata.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profil;