import React from "react"
import {NavLink} from "react-router-dom"

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink className={"purple"} to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink className={"white"} to="/portfolio">
          <li>Portfolio</li>
        </NavLink>
        <NavLink className={"purple"} to="/formation">
          <li>Formation</li>
        </NavLink>
        <NavLink className={"white"} to="/skills">
          <li>Compétences</li>
        </NavLink>
        <NavLink className={"purple"} to="/specialties">
          <li>Spécialités</li>
        </NavLink>
        <NavLink className={"white"} to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  )
}
export default Navigation
