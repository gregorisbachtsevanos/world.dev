import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import Privacy from './pages/privacy/Privacy';
import Register from './pages/register/Register';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
