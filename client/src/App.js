import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Guides from './pages/guides/Guides';
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import Privacy from './pages/privacy/Privacy';
import Register from './pages/register/Register';
import Sponsorship from './pages/sponsorship/Sponsorship';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/guides" element={<Guides />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
