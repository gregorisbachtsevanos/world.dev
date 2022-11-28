import { BrowserRouter, Routes, Route } from 'react-router-dom';

//* redux
import { Provider } from "react-redux";
import store from "./store";

//* app
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
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';

function App() {
  const user = false;

  return (
    <Provider store={store}>
      <div className="App">
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
                <Route path='/new-article' element={<CreateArticle />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/:username' element={<Profile />} />
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
    </Provider>
  );
}

export default App;
