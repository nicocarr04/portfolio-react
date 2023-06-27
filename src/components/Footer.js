import React from 'react'
import '../css/footer.css';
// Importation d'images importantes
import linkedinLong from '../imgs/LinkedIn-long.png'
import githubLong from '../imgs/GitHub-long.png'

function Footer() {
  return (
    <footer>
      <div className='footer-links'>
        <a href="https://www.linkedin.com/in/nicocarr04/" className='icon-footer'><img src={linkedinLong} alt="LinkedIn logo"></img></a>
        <h3 className='copyright'>Copyright 2023 &copy; Nicolas Games </h3>
        <a href="https://github.com/nicocarr04" className='icon-footer'><img src={githubLong} alt='GitHub logo'></img></a>
      </div>
    </footer>
  )
}

export default Footer