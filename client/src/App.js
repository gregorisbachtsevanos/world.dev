import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';

import { useAuthContext } from './hooks/useAuthContext';

import { PublicRouter } from './utils/PublicRouter';
import { PrivateRouter } from './utils/PrivateRouter';

import Index from './pages/index/Index';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Sponsorship from './pages/sponsorship/Sponsorship';
import CreateArticle from './pages/createArticle/CreateArticle';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import FAQ from './pages/faq/FAQ';
import Guides from './pages/guides/Guides';
import Privacy from './pages/privacy/Privacy';

function App() {
  const { user } = useAuthContext()
  console.log(user)

  return (
    <div className={`App px-5 ${user && user.extra_info.theme}`}>
      <BrowserRouter>
        <div>
          <Navbar user={user} />
          <Routes>
            {/* Public Routers */}
            <Route element={<PublicRouter user={user} />} >
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            {/* Private Routers */}
            <Route element={<PrivateRouter user={user} />}>
              <Route path='/:username/new-article' element={<CreateArticle user={user} />} />
              <Route path='/:username/settings' element={<Settings user={user} />} />
              <Route path='/:username' element={<Profile user={user} />} />
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
