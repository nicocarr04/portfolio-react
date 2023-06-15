import React from 'react'
import '../css/gdg.css'
import GDGPic from '../imgs/GDGInterface.png'

function GDG() {
  return (
    <div className="wrapper">
      <div className="projects-container">
        <div className="image-container">
          <img src={GDGPic} alt="gdg" className='gdgpic'/>
        </div>
        <div className="description-gdg-container">
          <a className="remove-linkbar" href='https://github.com/nicocarr04/GDG'><h1 className='project-name'>Group Builder</h1></a>
          <p>
              I have developed a group creator program that as the process of organizing students into groups. This software allows you to effortlessly add or remove students from your class. You can also import existing configurations or save your current setup for future use. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default GDG