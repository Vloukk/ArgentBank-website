import React from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

  return (
    <div className='login bg-dark'>
      <Header />
      <div className='sign-in__content'>
        <FontAwesomeIcon icon={faUserCircle} className='user-icon'/>
        <h1 className='sign-in__title'>Sign In</h1>
        <form>
          <div className='input__wrapper'>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className='input__wrapper'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
          </div>
          <div className="input__remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in__button">Sign In</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
