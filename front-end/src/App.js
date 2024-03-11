import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';

// Pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profil from './pages/profil/user/Profil';
import UserProtect from './pages/profil/UserProtect';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<UserProtect><Profil /></UserProtect>} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
