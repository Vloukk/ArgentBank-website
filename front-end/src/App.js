import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';

// Pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profil from './pages/user/profil/Profil';
import UserProtect from './pages/user/UserProtect';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<UserProtect><Profil /></UserProtect>} />
      </Routes>
    </Router>
  );
}

export default App;
