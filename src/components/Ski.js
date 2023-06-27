import React from 'react'
import '../css/ski.css';
// Importation d'une image
import SkiPic from '../imgs/skiWebsite.png'

function Ski() {
  return (
    <div className="wrapper">
      <div className="ski-container">
        <div className="image-container">
          <img src={SkiPic} alt="ski website pic" className='skipic'/>
        </div>
        <div className="description-ski-container">
        <a href="https://github.com/nicocarr04/website-ski-exemple" className='remove-linkbar'><h1 className='ski-name'>Ski website</h1></a>
          <p>
              I have developed a ski website that aims to provide a comprehensive platform for ski enthusiasts. Our website offers a range of features designed to enhance your skiing experience. While still a work in progress, one notable feature is the ability to add reservations to your cart. Whether you're looking for lift tickets, equipment rentals, or ski lessons, our intuitive interface allows you to easily select and add these items to your cart.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ski