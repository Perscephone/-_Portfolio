import React from "react"
import flower from "../assets/fleur.png"


const Hi = () => {
  return (
    <div className="hi">
      <p className="presentation_text">Hi,<br />I am Maëlys<br />
        <span>Web developer</span>
      </p>
      <img src={flower} className="flower" alt="flower"/>
      <div className="back"></div>
    </div>
  )
}
export default Hi