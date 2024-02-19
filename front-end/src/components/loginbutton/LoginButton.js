import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function LoginButton() {

  return (
    <div className='login-button'>
      <FontAwesomeIcon icon={faUserCircle} className='user-icon'/>
      <p className=''>Sign up</p>
    </div>
  );
}

export default LoginButton;