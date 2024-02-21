import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profil from './pages/profil/Profil';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
