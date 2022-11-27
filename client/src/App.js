import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import FAQ from './pages/faq/FAQ';
import Guides from './pages/guides/Guides';
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import Privacy from './pages/privacy/Privacy';
import Register from './pages/register/Register';
import Sponsorship from './pages/sponsorship/Sponsorship';
import { PublicRouter } from './utils/PublicRouter';
import { PrivateRouter } from './utils/PrivateRouter';
import CreateArticle from './pages/createArticle/CreateArticle';

function App() {
  const user = true;

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            {/* Public Routers */}
            <Route element={<PublicRouter user={user} />} >
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            {/* Private Routers */}
            <Route element={<PrivateRouter user={user} />}>
              <Route path='/new-article' element={<CreateArticle />} />
            </Route>
            {/* General Routers */}
            <Route index element={<Index user={user} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
