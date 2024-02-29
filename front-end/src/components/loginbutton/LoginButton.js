import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import  { logout } from '../../redux/reducers/authSlice'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function LoginButton() {
  const isConnected = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className='login-button'>
      {isConnected ? (
          <div className='connected'>
              <Link to='/profile'>
                  <i className='fa-solid fa-2x fa-circle-user' />
              </Link>
              <Link to='/' onClick={Logout}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} className='icon sign-out-icon'/>
                  <span> Sign out </span>
              </Link>
          </div>
      ) : (
          <div className='not-connected'>
              <Link to='/login' >
                <FontAwesomeIcon icon={faUserCircle} className='icon user-icon'/>
                  <span>Sign In</span>
              </Link>
          </div>
      )}
    </div>
  );
}

export default LoginButton;