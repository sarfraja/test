import './App.css';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import { Route, BrowserRouter, Routes } from 'react-router-dom' 
import Header from './components/Header';
import Footer from './components/Footer';
import Practice from './components/pages/Practice';
import GithubApi from './components/pages/GithubApi';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Aboutus />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/githubapi' element={<GithubApi />} />
        
      
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
