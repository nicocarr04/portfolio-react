import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import GDG from './components/GDG';
import Ski from './components/Ski';

function App() { 
  return (
    <div className='parent'>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap" />
      </Helmet>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gdg' element={<GDG/>}/>
        <Route path='/wski' element={<Ski/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
