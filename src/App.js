import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';

function App() { 
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap" />
      </Helmet>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
