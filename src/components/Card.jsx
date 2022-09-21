import background_front from "../assets/woman.jpg"
import background_back from "../assets/me.jpg"

const Card = () => {
  return(
    <div className="who_am_i">
      <div className="card">
        <div className="card-inner">
          <div className="card-front" style={{ backgroundImage: `url(${background_front})` }}>
            <div className="card-content">
              <h2>Maëlys Ch.</h2>
              <p>Developpeuse</p>
              <p>Mais pas que ! </p>
            </div>
          </div>
          <div className="card-back" >
            <div className="card-top">
              <div className="card-image" style={{ backgroundImage: `url(${background_back})` }}></div>
            </div>
            <ul className="know_how">
              <li>Autonome</li>
              <li>Exigeante</li>
              <li>Curieuse</li>
              <li>Passionnée</li>
              <li>Proactive</li>
            </ul>  
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
