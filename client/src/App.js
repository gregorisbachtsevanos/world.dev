import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
