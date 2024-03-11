import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/authAction';
import { getUserProfile } from '../../redux/actions/userAction';
import { loginSuccess } from '../../redux/reducers/authSlice';

// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(email, password));
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

   // useEffect permettant de rester connecté après un rafraîchissement de la page 
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
  
    if (authToken) {
      dispatch(getUserProfile());
      dispatch(loginSuccess({ token: authToken }));
    }
  }, [dispatch]);
  
  // useEffect séparé pour gérer la redirection
  useEffect(() => {
    if (user && token) {
      navigate('/profil');
    }
  }, [user, token, navigate]);
  
  
  return (
    <div className='login bg-dark'>
      <Header />
      <div className='sign-in__content'>
        <FontAwesomeIcon icon={faUserCircle} className='user-icon'/>
        <h1 className='sign-in__title'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input__wrapper'>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="current-text" value={email} onChange={(e) => setEmail(e.target.value)} className={error ? 'error-border' : ''}/>
          </div>
          <div className='input__wrapper'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className={error ? 'error-border' : ''}/>
          </div>
          <div className="input__remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="sign-in__button">Sign In</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
