import React from 'react';
import logo from '../../assets/logo/argentBankLogo.png'
import { Link } from 'react-router-dom';
import LoginButton from '../loginbutton/LoginButton';

function Header() {

  return (
    <div className='header'>
        <nav className='header__nav'>
            <Link to="/">
              <img className="logo" src={logo} alt="logo de l'agence kasa" />
            </Link>
            <h1 className="sr-only">Argent Bank</h1>
            <Link to="/login">
              <LoginButton />
            </Link>
        </nav>
    </div>
  );
}

export default Header;