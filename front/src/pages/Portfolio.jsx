import React from "react"
import {projects} from "../components/Data.jsx"

const Portfolio = () => {
  return(
    <section id="projects">
      <div className="portfolio">
        <span className="opacity_title">PORTFOLIO</span>
        <p className="title">Mes réalisations</p>

        <div className="parentContainer">      
          {projects.map((project) => (
            <div className="container" key={project.image}>
              <div className="pictureCard" >
                <img className="imgProject" src={project.image} alt="gallery"/>
              </div>
              <div className="pictureHover">
                <div className="txtHover">
                  <h3 className="whatUsed">{project.title}</h3>
                  <p className="skillsUsed">{project.skillsUsed}</p>
                </div>
                <div className="infoProject">
                  <h3 className="infosTitle">Infos projet</h3>
                  <p className="textProject">{project.textProject}</p>
                </div>
              </div>
            
            </div>
          ))}
        </div>  
        
      
      </div>
    </section>
  )
}

export default Portfolio