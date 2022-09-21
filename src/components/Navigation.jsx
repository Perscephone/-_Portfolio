import React from "react"
import {Link } from "react-scroll"

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="link" to="accueil" spy={true} smooth={true} offset={-150} duration={500}>Qui suis-je?</Link>
      <Link className="link" to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
      <Link className="link" to="skills" spy={true} smooth={true} offset={50} duration={500}>Compétences</Link>
    </div>
  )
}
export default Navigation
