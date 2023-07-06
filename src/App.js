import './App.css';

import { Route, Routes } from 'react-router-dom'; // Importe les composants Route et Routes de la bibliothèque react-router-dom.

import { Helmet } from 'react-helmet'; // Importe le composant Helmet de la bibliothèque react-helmet.

// Importe des composants nécessaire pour bien affiché la page.
import Home from './components/Home'; 
import Projects from './components/Projects';
import Testimonies from './components/Testimonies';
import Contact from './components/Contact';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import GDG from './components/GDG'; 
import Ski from './components/Ski';

function App() { 
  return (
    <div className='parent'> {/* Définit un élément div avec la classe 'parent' */}
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap" />
      </Helmet> {/* Utilise le composant Helmet pour ajouter un lien vers une feuille de style de Google Fonts */}
      <Header/>
      <Routes> {/* Définit les routes de l'application */}
        <Route path='/' element={<Home/>}/> 
        <Route path='/testimonies' element={<Testimonies/>}/> 
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
